import React, { useState, useEffect } from 'react';
import { AuthComponent } from './components/AuthComponent';
import { authService } from './services/auth.service';
import { dataService, Innermost, WillingBox, Wish, WillingItem } from './services/data.service';
import { emailService } from './services/email.service';
import { smsService } from './services/sms.service';
import { auth } from './config/firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

interface User {
  uid: string;
  email: string;
  displayName: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  activeInnermosts: string[];
  createdAt: any;
  subscriptionStatus: 'free' | 'premium' | 'expired';
  lastLogin?: any;
  emailVerified?: boolean;
  twoFactorEnabled?: boolean;
}

export default function FirebaseApp() {
  // Auth state
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // App state
  const [innermosts, setInnermosts] = useState<Innermost[]>([]);
  const [selectedInnermost, setSelectedInnermost] = useState<Innermost | null>(null);
  const [currentWillingBox, setCurrentWillingBox] = useState<WillingBox | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('dashboard');
  
  // Form state
  const [currentWishes, setCurrentWishes] = useState<Wish[]>([]);
  const [currentWillingSelections, setCurrentWillingSelections] = useState<WillingItem[]>([]);
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [inviteMessage, setInviteMessage] = useState('');
  const [inviteMethod, setInviteMethod] = useState<'email' | 'sms'>('email');
  const [mutualCode, setMutualCode] = useState('');
  const [showMutualPairing, setShowMutualPairing] = useState(false);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      
      if (user) {
        // Get user profile from Firestore
        const profile = await authService.getUserProfile(user.uid);
        if (profile) {
          setUserProfile(profile as User);
          
          // Load user's innermosts
          try {
            const userInnermosts = await dataService.getUserInnermosts(user.uid);
            setInnermosts(userInnermosts);
          } catch (error) {
            console.error('Error loading innermosts:', error);
          }
        }
      } else {
        setUserProfile(null);
        setInnermosts([]);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Load current willing box when innermost is selected
  useEffect(() => {
    if (!selectedInnermost) return;

    const loadWillingBox = async () => {
      try {
        let box = await dataService.getCurrentWillingBox(selectedInnermost.id);
        
        if (!box && selectedInnermost.status === 'active') {
          // Create new willing box for this week
          box = await dataService.createWillingBox(
            selectedInnermost.id,
            selectedInnermost.partnerA,
            selectedInnermost.partnerB
          );
        }
        
        setCurrentWillingBox(box);
      } catch (error) {
        console.error('Error loading willing box:', error);
      }
    };

    loadWillingBox();
  }, [selectedInnermost]);

  // Subscribe to real-time updates for willing box
  useEffect(() => {
    if (!currentWillingBox) return;

    const unsubscribe = dataService.subscribeToWillingBox(
      currentWillingBox.id,
      (updatedBox) => {
        setCurrentWillingBox(updatedBox);
      }
    );

    return () => unsubscribe();
  }, [currentWillingBox?.id]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await authService.signOutUser();
      setUserProfile(null);
      setInnermosts([]);
      setSelectedInnermost(null);
      setCurrentWillingBox(null);
      setCurrentPage('dashboard');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Handle creating a new pairing
  const handleCreatePairing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userProfile || !firebaseUser) return;

    try {
      // Create the innermost
      const innermost = await dataService.createInnermost(
        firebaseUser.uid,
        inviteMethod === 'email' ? partnerEmail : partnerPhone,
        userProfile.displayName
      );

      // Send invitation based on method
      if (inviteMethod === 'email') {
        await emailService.sendPairingInvite({
          toEmail: partnerEmail,
          fromName: userProfile.displayName,
          pairingCode: innermost.pairingCode!,
          message: inviteMessage
        });
        alert(`Invitation sent to ${partnerEmail}! They'll receive an email with a pairing code.`);
      } else {
        const formattedPhone = smsService.formatPhoneNumber(partnerPhone);
        await smsService.sendPairingInviteSMS({
          toPhone: formattedPhone,
          fromName: userProfile.displayName,
          pairingCode: innermost.pairingCode!,
          message: inviteMessage
        });
        alert(`Invitation sent to ${partnerPhone}! They'll receive a text with a pairing code.`);
      }

      // Update local state
      setInnermosts(prev => [...prev, innermost]);
      setPartnerEmail('');
      setPartnerPhone('');
      setInviteMessage('');
      setCurrentPage('dashboard');
    } catch (error: any) {
      alert(`Failed to create pairing: ${error.message}`);
    }
  };

  // Handle mutual pairing between existing users
  const handleMutualPairing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userProfile || !firebaseUser) return;

    try {
      // Find the other user by email
      const otherUser = await dataService.findUserByEmail(partnerEmail);
      if (!otherUser) {
        alert('User not found. They need to create an account first.');
        return;
      }

      // Generate a 6-digit confirmation code
      const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Send the code to both users
      await emailService.sendMutualPairingCode(partnerEmail, confirmationCode, userProfile.displayName);
      await emailService.sendMutualPairingCode(userProfile.email, confirmationCode, otherUser.displayName);
      
      // Store the pending pairing
      sessionStorage.setItem('pendingPairing', JSON.stringify({
        otherUserId: otherUser.id,
        confirmationCode,
        timestamp: Date.now()
      }));
      
      setMutualCode(confirmationCode);
      alert(`Confirmation code sent to both ${userProfile.email} and ${partnerEmail}. Both must enter the same code.`);
    } catch (error: any) {
      alert(`Failed to initiate pairing: ${error.message}`);
    }
  };

  // Handle confirming mutual pairing
  const handleConfirmMutualPairing = async () => {
    if (!userProfile || !firebaseUser || !mutualCode) return;

    try {
      const pendingData = sessionStorage.getItem('pendingPairing');
      if (!pendingData) {
        alert('No pending pairing found. Please start a new pairing.');
        return;
      }
      
      const pending = JSON.parse(pendingData);
      
      // Check if code matches
      if (pending.confirmationCode !== mutualCode) {
        alert('Invalid confirmation code');
        return;
      }
      
      // Check if not expired (5 minutes)
      if (Date.now() - pending.timestamp > 5 * 60 * 1000) {
        alert('Confirmation code expired. Please start a new pairing.');
        sessionStorage.removeItem('pendingPairing');
        return;
      }
      
      // Create the mutual pairing
      const innermost = await dataService.createMutualPairing(
        firebaseUser.uid,
        pending.otherUserId,
        mutualCode
      );
      
      // Update local state
      setInnermosts(prev => [...prev, innermost]);
      sessionStorage.removeItem('pendingPairing');
      setMutualCode('');
      setShowMutualPairing(false);
      setCurrentPage('dashboard');
      
      alert('Partnership created successfully!');
    } catch (error: any) {
      alert(`Failed to confirm pairing: ${error.message}`);
    }
  };

  // Handle breaking a partnership
  const handleBreakPartnership = async (innermostId: string) => {
    if (!firebaseUser) return;
    
    if (!confirm('Are you sure you want to end this partnership? This action cannot be undone.')) {
      return;
    }

    try {
      await dataService.breakPartnership(innermostId, firebaseUser.uid);
      
      // Update local state
      setInnermosts(prev => prev.filter(i => i.id !== innermostId));
      if (selectedInnermost?.id === innermostId) {
        setSelectedInnermost(null);
        setCurrentWillingBox(null);
        setCurrentPage('dashboard');
      }
      
      alert('Partnership ended successfully.');
    } catch (error: any) {
      alert(`Failed to end partnership: ${error.message}`);
    }
  };

  // Handle saving wish list
  const handleSaveWishList = async () => {
    if (!userProfile || !currentWillingBox || !selectedInnermost || !firebaseUser) return;
    
    if (currentWishes.length !== 12) {
      alert('Please add exactly 12 wishes to your WishList');
      return;
    }
    
    const mostWantedCount = currentWishes.filter(w => w.isMostWanted).length;
    if (mostWantedCount !== 1) {
      alert('Please mark exactly 1 wish as Most Wanted');
      return;
    }

    const isPartnerA = firebaseUser.uid === selectedInnermost.partnerA;
    
    try {
      await dataService.updateWishList(
        currentWillingBox.id,
        firebaseUser.uid,
        currentWishes,
        isPartnerA
      );
      
      alert('WishList saved successfully!');
      setCurrentPage('innermost-detail');
    } catch (error: any) {
      alert(`Failed to save WishList: ${error.message}`);
    }
  };

  // Handle saving willing list
  const handleSaveWillingList = async () => {
    if (!userProfile || !currentWillingBox || !selectedInnermost || !firebaseUser) return;
    
    if (currentWillingSelections.length !== 3) {
      alert('Please select exactly 3 items');
      return;
    }

    const isPartnerA = firebaseUser.uid === selectedInnermost.partnerA;
    
    try {
      await dataService.updateWillingList(
        currentWillingBox.id,
        firebaseUser.uid,
        currentWillingSelections,
        isPartnerA
      );
      
      alert('WillingList saved successfully!');
      setCurrentPage('innermost-detail');
    } catch (error: any) {
      alert(`Failed to save WillingList: ${error.message}`);
    }
  };

  // Show loading screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center">
          <div className="text-4xl mb-4">🌳</div>
          <p className="text-gray-600">Loading The Willing Tree...</p>
        </div>
      </div>
    );
  }

  // Show auth screen if not logged in
  if (!firebaseUser || !userProfile) {
    return <AuthComponent onAuthSuccess={(profile) => setUserProfile(profile as User)} />;
  }

  // Main app interface
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {userProfile.displayName}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Dashboard */}
        {currentPage === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Partnerships</h2>
            
            {innermosts.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <p className="text-gray-600 mb-4">You haven't created any partnerships yet.</p>
                <button
                  onClick={() => setCurrentPage('create-pairing')}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Create Your First Partnership
                </button>
              </div>
            ) : (
              <div className="grid gap-4">
                {innermosts.map(innermost => (
                  <div
                    key={innermost.id}
                    className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        setSelectedInnermost(innermost);
                        setCurrentPage('innermost-detail');
                      }}
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Partnership with {innermost.partnerBEmail || innermost.partnerAEmail}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Status: {innermost.status === 'active' ? '🟢 Active' : '🟡 Pending'}
                        </p>
                        {innermost.pairingCode && (
                          <p className="text-xs text-gray-500 mt-1">
                            Pairing Code: {innermost.pairingCode}
                          </p>
                        )}
                      </div>
                      <div className="text-2xl">
                        {innermost.status === 'active' ? '🌳' : '🌱'}
                      </div>
                    </div>
                    {innermost.status === 'active' && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBreakPartnership(innermost.id);
                          }}
                          className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          End Partnership
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                
                <button
                  onClick={() => setCurrentPage('create-pairing')}
                  className="bg-green-100 text-green-700 rounded-lg p-6 hover:bg-green-200 transition-colors text-center"
                >
                  + Create New Partnership
                </button>
              </div>
            )}
          </div>
        )}

        {/* Create Pairing */}
        {currentPage === 'create-pairing' && (
          <div className="max-w-md mx-auto">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="mb-4 text-gray-600 hover:text-gray-800"
            >
              ← Back to Dashboard
            </button>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Create Partnership</h2>
              
              {/* Pairing Type Toggle */}
              <div className="mb-6">
                <div className="flex gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setShowMutualPairing(false)}
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                      !showMutualPairing
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Invite New User
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowMutualPairing(true)}
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                      showMutualPairing
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Pair with Existing User
                  </button>
                </div>
              </div>

              {!showMutualPairing ? (
                <form onSubmit={handleCreatePairing}>
                  {/* Invite Method Toggle */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Invite Method
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setInviteMethod('email')}
                        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                          inviteMethod === 'email'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        📧 Email
                      </button>
                      <button
                        type="button"
                        onClick={() => setInviteMethod('sms')}
                        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                          inviteMethod === 'sms'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        📱 SMS/Text
                      </button>
                    </div>
                  </div>

                  {inviteMethod === 'email' ? (
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Partner's Email
                      </label>
                      <input
                        type="email"
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                  ) : (
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Partner's Phone Number
                      </label>
                      <input
                        type="tel"
                        value={partnerPhone}
                        onChange={(e) => setPartnerPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="(555) 123-4567"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">US phone numbers only</p>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      value={inviteMessage}
                      onChange={(e) => setInviteMessage(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                      placeholder="Add a personal note to your invitation..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                  >
                    Send {inviteMethod === 'email' ? 'Email' : 'SMS'} Invitation
                  </button>
                </form>
              ) : (
                <div>
                  <div className="mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-blue-800">
                        To pair with an existing user, both partners must:
                      </p>
                      <ol className="list-decimal list-inside text-sm text-blue-700 mt-2">
                        <li>Enter each other's email</li>
                        <li>Receive a confirmation code</li>
                        <li>Enter the same code to confirm</li>
                      </ol>
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Partner's Email (must be registered)
                      </label>
                      <input
                        type="email"
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>

                    {mutualCode ? (
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Enter Confirmation Code
                        </label>
                        <input
                          type="text"
                          value={mutualCode}
                          onChange={(e) => setMutualCode(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                          placeholder="Enter 6-digit code"
                          maxLength={6}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Both partners must enter the same code
                        </p>
                      </div>
                    ) : null}

                    {!mutualCode ? (
                      <button
                        onClick={handleMutualPairing}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                      >
                        Send Confirmation Code
                      </button>
                    ) : (
                      <button
                        onClick={handleConfirmMutualPairing}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                      >
                        Confirm Partnership
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Innermost Detail */}
        {currentPage === 'innermost-detail' && selectedInnermost && (
          <div>
            <button
              onClick={() => {
                setSelectedInnermost(null);
                setCurrentWillingBox(null);
                setCurrentPage('dashboard');
              }}
              className="mb-4 text-gray-600 hover:text-gray-800"
            >
              ← Back to Dashboard
            </button>
            
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Partnership with {selectedInnermost.partnerBEmail || selectedInnermost.partnerAEmail}
              </h2>
              
              {selectedInnermost.status === 'pending' ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800">
                    Waiting for partner to accept invitation.
                    <br />
                    Pairing Code: <strong>{selectedInnermost.pairingCode}</strong>
                  </p>
                </div>
              ) : currentWillingBox ? (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800">
                      Week {currentWillingBox.weekNumber} - Status: {currentWillingBox.status}
                    </p>
                  </div>
                  
                  {currentWillingBox.status === 'planting_trees' && (
                    <button
                      onClick={() => setCurrentPage('create-wishlist')}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                    >
                      Create Your WishList
                    </button>
                  )}
                  
                  {currentWillingBox.status === 'selecting_willing' && (
                    <button
                      onClick={() => setCurrentPage('select-willing')}
                      className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                    >
                      Select Your WillingList
                    </button>
                  )}
                  
                  {currentWillingBox.status === 'guessing' && (
                    <button
                      onClick={() => setCurrentPage('guessing-game')}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Play Guessing Game
                    </button>
                  )}
                </div>
              ) : (
                <p className="text-gray-600">Loading willing box...</p>
              )}
            </div>
          </div>
        )}

        {/* Create WishList */}
        {currentPage === 'create-wishlist' && currentWillingBox && (
          <div>
            <button
              onClick={() => setCurrentPage('innermost-detail')}
              className="mb-4 text-gray-600 hover:text-gray-800"
            >
              ← Back
            </button>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Create Your WishList ({currentWishes.length}/12)
              </h2>
              <p className="text-gray-600 mb-4">
                Add 12 wishes and mark 1 as Most Wanted (worth triple points)
              </p>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const wishText = formData.get('wish') as string;
                if (wishText && currentWishes.length < 12) {
                  const newWish: Wish = {
                    id: Date.now().toString(),
                    text: wishText,
                    category: 'general',
                    isMostWanted: false,
                    createdAt: new Date()
                  };
                  setCurrentWishes([...currentWishes, newWish]);
                  (e.currentTarget as HTMLFormElement).reset();
                }
              }}>
                <div className="flex gap-2 mb-4">
                  <input
                    name="wish"
                    type="text"
                    placeholder="Enter a wish..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                    disabled={currentWishes.length >= 12}
                  />
                  <button
                    type="submit"
                    disabled={currentWishes.length >= 12}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
                  >
                    Add
                  </button>
                </div>
              </form>
              
              <div className="space-y-2 mb-4">
                {currentWishes.map((wish, index) => (
                  <div key={wish.id} className={`p-3 rounded-lg border ${wish.isMostWanted ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between">
                      <span className="flex-1">{wish.text}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setCurrentWishes(currentWishes.map(w => 
                              w.id === wish.id ? {...w, isMostWanted: !w.isMostWanted} : {...w, isMostWanted: false}
                            ));
                          }}
                          className={`px-2 py-1 rounded text-xs ${wish.isMostWanted ? 'bg-yellow-400' : 'bg-gray-200'}`}
                        >
                          {wish.isMostWanted ? '⭐ Most Wanted' : '☆'}
                        </button>
                        <button
                          onClick={() => setCurrentWishes(currentWishes.filter(w => w.id !== wish.id))}
                          className="text-red-600 hover:text-red-800"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {currentWishes.length === 12 && (
                <button
                  onClick={handleSaveWishList}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                >
                  Save WishList
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}