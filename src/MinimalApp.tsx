import React, { useState, useEffect } from 'react';
import { sendInviteEmail } from './services/emailService';
import { findUserByEmail, registerUser, createConnection } from './services/userMatchingService';

interface User {
  name: string;
  email: string;
  age?: number;
  gender?: 'male' | 'female' | 'non-binary' | 'prefer-not-to-say';
  isPremium?: boolean;
  premiumSince?: Date;
}

interface Wish {
  id: string;
  text: string;
  category: string;
  isMostCherished: boolean;
  createdAt: Date;
}

interface WillingSelection {
  id: string;
  wishId: string;
  priority: number; // 1-3, where 1 is highest priority (double points)
  createdAt: Date;
}

interface Innermost {
  id: string;
  partnerEmail: string;
  status: 'pending' | 'active';
  inviteMessage?: string;
  createdAt: Date;
  userWishes?: Wish[];
  partnerWishes?: Wish[];
  userWillingSelections?: WillingSelection[]; // User's willing to work on from partner's wishes
  partnerWillingSelections?: WillingSelection[]; // Partner's willing to work on from user's wishes
}

interface WeeklyGame {
  week: number;
  userSelections: string[];
  partnerSelections: string[];
  scores: { userPoints: number; partnerPoints: number };
  userWillingSelections: WillingSelection[];
}

interface GameResults {
  userTotalPoints: number;
  userGuessResults: Array<{ wishId: string; wasCorrect: boolean; points: number }>;
}

// The Willing Tree Component - like a feed box showing the two partners
const WillingBoxDisplay = ({ user, partnerEmail, innermost }: { 
  user: User | null; 
  partnerEmail: string;
  innermost?: Innermost | null;
}) => {
  const getPartnerName = () => {
    if (innermost?.status === 'active') {
      return partnerEmail.split('@')[0]; // Use email prefix as name for demo
    }
    return partnerEmail;
  };

  return (
    <div className="bg-green-50 border-4 border-green-200 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3">📦</div>
          <div className="text-sm text-green-800 font-medium mb-2">WILLING BOX</div>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 px-4 py-2 rounded-full">
              <div className="text-base font-medium text-green-800">🌱 {user?.name || 'You'}</div>
            </div>
            <div className="text-green-600 text-xl">⚡</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full">
              <div className="text-base font-medium text-gray-700">🌿 {getPartnerName()}</div>
            </div>
          </div>
          {innermost?.status === 'active' && (
            <div className="mt-3 text-sm text-green-700 font-medium">🌳 Growing Together</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function MinimalApp() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'login' | 'signup' | 'dashboard' | 'create-innermost' | 'innermost-detail' | 'settings' | 'premium-upgrade' | 'premium-checkout' | 'premium-success' | 'plant-wishes' | 'willing-selection' | 'weekly-tending' | 'guessing-game'>('welcome');
  const [user, setUser] = useState<User | null>(null);
  const [innermosts, setInnermosts] = useState<Innermost[]>([]);
  const [selectedInnermost, setSelectedInnermost] = useState<Innermost | null>(null);
  
  // Persistence functions
  const saveToStorage = (key: string, data: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  };
  
  const loadFromStorage = (key: string) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return null;
    }
  };
  
  // Load data on component mount
  useEffect(() => {
    const savedUser = loadFromStorage('willingTree_user');
    const savedInnermosts = loadFromStorage('willingTree_innermosts');
    const savedSelectedInnermost = loadFromStorage('willingTree_selectedInnermost');
    
    if (savedUser) {
      setUser(savedUser);
      setCurrentPage('dashboard');
    }
    if (savedInnermosts) {
      setInnermosts(savedInnermosts);
    }
    if (savedSelectedInnermost) {
      setSelectedInnermost(savedSelectedInnermost);
    }
  }, []);
  
  // Save data when state changes
  useEffect(() => {
    if (user) {
      saveToStorage('willingTree_user', user);
    }
  }, [user]);
  
  useEffect(() => {
    if (innermosts.length > 0) {
      saveToStorage('willingTree_innermosts', innermosts);
    }
  }, [innermosts]);
  
  useEffect(() => {
    if (selectedInnermost) {
      saveToStorage('willingTree_selectedInnermost', selectedInnermost);
    }
  }, [selectedInnermost]);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReminders: true,
    scoreNotifications: true,
    theme: 'growth' as 'growth' | 'classic'
  });
  const [currentWishes, setCurrentWishes] = useState<Wish[]>([]);
  const [currentWillingSelections, setCurrentWillingSelections] = useState<WillingSelection[]>([]);
  
  // State hooks for various pages (moved to top to avoid conditional hook calls)
  const [willingSelections, setWillingSelections] = useState<{[wishId: string]: boolean}>({});
  const [hasCompletedWilling, setHasCompletedWilling] = useState(false);
  const [selectedWishes, setSelectedWishes] = useState<{[wishId: string]: boolean}>({});
  const [currentWeekGuesses, setCurrentWeekGuesses] = useState<{[wishId: string]: boolean}>({});
  const [currentWeekActions, setCurrentWeekActions] = useState<{[wishId: string]: 'pending' | 'completed'}>({});
  const [userGuesses, setUserGuesses] = useState<{[wishId: string]: boolean}>({});
  const [gamePhase, setGamePhase] = useState<'guessing' | 'results'>('guessing');
  const [finalResults, setFinalResults] = useState<GameResults | null>(null);

  // WeeklyGame interface
  interface WeeklyGame {
    week: number;
    userSelections: string[];
    partnerSelections: string[];
    scores: { userPoints: number; partnerPoints: number };
    userWillingSelections: WillingSelection[];
  }
  
  interface GameResults {
    userTotalPoints: number;
    userGuessResults: Array<{ wishId: string; wasCorrect: boolean; points: number }>;
  }
  
  const [currentWeeklyGame, setCurrentWeeklyGame] = useState<WeeklyGame | null>(null);

  // Helper functions
  const getCurrentWeekNumber = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.floor(diff / oneWeek) + 1;
  };

  const getPartnerWishes = (): Wish[] => {
    // Return demo partner wishes for testing
    return [
      { id: 'pw1', text: 'Listen without trying to fix everything', category: 'Communication', isMostCherished: true, createdAt: new Date() },
      { id: 'pw2', text: 'Plan regular date nights', category: 'Quality Time', isMostCherished: false, createdAt: new Date() },
      { id: 'pw3', text: 'Give me compliments about how I look', category: 'Affection', isMostCherished: false, createdAt: new Date() },
      { id: 'pw4', text: 'Help with household chores without being asked', category: 'Support', isMostCherished: false, createdAt: new Date() },
      { id: 'pw5', text: 'Be patient when I am stressed', category: 'Understanding', isMostCherished: false, createdAt: new Date() }
    ];
  };

  // Research-based wish suggestions by gender and age
  const getWishSuggestions = (gender?: string, age?: number): {category: string, wishes: string[]}[] => {
    const baseCategories = [
      {
        category: "Communication",
        wishes: [
          "Listen to me without trying to fix everything",
          "Ask about my day and really listen to the answer",
          "Share your thoughts and feelings openly with me",
          "Have deep conversations about our dreams and goals",
          "Express appreciation for things I do",
          "Talk through conflicts calmly instead of avoiding them",
          "Give me your full attention when we're talking",
          "Ask for my opinion on important decisions"
        ]
      },
      {
        category: "Affection & Intimacy",
        wishes: [
          "Hug me randomly throughout the day",
          "Hold my hand when we're walking together",
          "Kiss me goodbye and hello",
          "Cuddle with me while watching TV",
          "Tell me you love me more often",
          "Give me compliments about how I look",
          "Be more physically affectionate in public",
          "Initiate intimacy more often"
        ]
      },
      {
        category: "Quality Time",
        wishes: [
          "Plan regular date nights for just us",
          "Put your phone away during our meals together",
          "Take walks together in the evening",
          "Try new activities or hobbies together",
          "Spend a whole day together without distractions",
          "Watch movies or shows we both enjoy",
          "Cook or bake something together",
          "Have coffee or tea together in the morning"
        ]
      },
      {
        category: "Household & Life Management",
        wishes: [
          "Help with household chores without being asked",
          "Take initiative in planning our social calendar",
          "Handle certain bills or administrative tasks",
          "Keep your personal spaces organized",
          "Help with meal planning and grocery shopping",
          "Take care of home maintenance tasks",
          "Organize family activities or outings",
          "Manage your own schedule and commitments"
        ]
      },
      {
        category: "Support & Encouragement",
        wishes: [
          "Encourage my goals and dreams actively",
          "Be my cheerleader when I'm feeling down",
          "Help me problem-solve without taking over",
          "Celebrate my achievements, big and small",
          "Support my friendships and family relationships",
          "Be patient with me when I'm stressed",
          "Believe in me when I doubt myself",
          "Help me maintain my individual interests"
        ]
      },
      {
        category: "Personal Growth",
        wishes: [
          "Work on your own personal development",
          "Be open to feedback about our relationship",
          "Take care of your physical health",
          "Manage your stress in healthy ways",
          "Pursue your own interests and hobbies",
          "Be willing to try counseling if needed",
          "Learn new skills or take classes",
          "Practice gratitude and positivity"
        ]
      }
    ];

    // Age-based adjustments
    if (age && age < 30) {
      baseCategories[2].wishes.push("Travel together to new places", "Go to concerts or events together");
      baseCategories[4].wishes.push("Support my career ambitions", "Help me save money for our future");
    } else if (age && age > 45) {
      baseCategories[2].wishes.push("Plan for our retirement together", "Spend more time with extended family");
      baseCategories[3].wishes.push("Help with aging parent care", "Plan for our financial future");
    }

    // Gender-specific common requests based on relationship research
    if (gender === 'female') {
      baseCategories[1].wishes.unshift("Notice when I've done something different with my appearance");
      baseCategories[0].wishes.unshift("Remember important dates and details I share");
      baseCategories[4].wishes.unshift("Defend me when others criticize me");
    } else if (gender === 'male') {
      baseCategories[4].wishes.unshift("Appreciate my efforts to provide and protect");
      baseCategories[0].wishes.unshift("Express confidence in my decisions");
      baseCategories[5].wishes.unshift("Encourage my friendships with other men");
    }

    return baseCategories;
  };

  if (currentPage === 'welcome') {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-10 max-w-lg w-full text-center border-4 border-green-200">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl">📦</div>
              <div className="text-5xl ml-3">🌱</div>
            </div>
            <h1 className="text-4xl font-bold text-green-800 mb-3">🌳 The Willing Tree</h1>
            <p className="text-gray-600 text-lg">Nurture your relationship through intentional growth</p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => setCurrentPage('signup')}
              className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
            >
              Get Started - Sign Up
            </button>
            <button
              onClick={() => setCurrentPage('login')}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              I Already Have an Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'signup') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-yellow-900">Create Your Account</h2>
            <p className="text-gray-600 mt-2">Start building deeper connections</p>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const userData = {
              name: formData.get('name') as string,
              email: formData.get('email') as string,
              age: parseInt(formData.get('age') as string) || undefined,
              gender: (formData.get('gender') as string) as User['gender'] || undefined
            };
            
            setUser(userData);
            
            // Register user in matching database
            registerUser({
              name: userData.name,
              email: userData.email,
              age: userData.age,
              gender: userData.gender
            }).then(result => {
              if (!result.success) {
                console.log('User registration for matching failed:', result.message);
              }
            });
            
            setCurrentPage('dashboard');
          }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Create a password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  name="age"
                  type="number"
                  min="18"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  name="gender"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select gender (optional)</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage('welcome')}
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-10 max-w-lg w-full border-4 border-green-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800">Welcome Back</h2>
            <p className="text-gray-600 mt-3 text-lg">Sign in to continue your journey</p>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            const demoUser = { name: "Demo User", email: "demo@example.com", age: 32, gender: "male" as const };
            setUser(demoUser);
            // Check if this user has existing connections
            const existingConnections = loadFromStorage(`willingTree_connections_${demoUser.email}`);
            if (existingConnections) {
              setInnermosts(existingConnections);
            }
            setCurrentPage('dashboard');
          }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage('welcome')}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (currentPage === 'create-innermost') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-yellow-900 mb-2">🌱 Plant with your Innermost</h2>
              <p className="text-gray-600">Invite someone special to grow your relationship together</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const partnerEmail = formData.get('partnerEmail') as string;
              const inviteMessage = formData.get('inviteMessage') as string;

              if (partnerEmail === user?.email) {
                alert('❌ You cannot pair with yourself! Please enter your partner\'s email.');
                return;
              }
              
              // Check if partner is already registered
              findUserByEmail(partnerEmail).then(existingUser => {
                if (existingUser) {
                  console.log('🎉 Found existing user:', existingUser.name);
                  // Could show a different message or flow for existing users
                }
              });

              const newInnermost: Innermost = {
                id: Date.now().toString(),
                partnerEmail,
                inviteMessage: inviteMessage || undefined,
                status: 'pending',
                createdAt: new Date(),
                // Initialize with demo partner wishes for immediate testing
                partnerWishes: getPartnerWishes()
              };

              setInnermosts(prev => [...prev, newInnermost]);
              setSelectedInnermost(newInnermost);
              
              // Save the connection for this user
              if (user) {
                const userConnections = loadFromStorage(`willingTree_connections_${user.email}`) || [];
                userConnections.push(newInnermost);
                saveToStorage(`willingTree_connections_${user.email}`, userConnections);
                
                // Send actual email invite
                sendInviteEmail({
                  partnerEmail,
                  senderName: user.name,
                  senderEmail: user.email,
                  inviteMessage: inviteMessage || undefined,
                  appUrl: window.location.origin
                }).then(result => {
                  if (result.success) {
                    console.log('Invite email sent successfully');
                  } else {
                    console.error('Failed to send invite email:', result.message);
                  }
                });
                
                // Create connection in matching database
                createConnection(user.email, partnerEmail, inviteMessage || undefined)
                  .then(result => {
                    if (!result.success) {
                      console.log('Connection creation failed:', result.message);
                    }
                  });
              }
              
              setCurrentPage('innermost-detail');
            }}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partner's Email Address *
                  </label>
                  <input
                    name="partnerEmail"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="partner@example.com"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    They'll receive an invitation to join your Innermost
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Personal Invitation Message (Optional)
                  </label>
                  <textarea
                    name="inviteMessage"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Hey! I'd love to grow our relationship together using The Willing Tree. It's a fun way to understand each other better through weekly activities..."
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Add a personal touch to your invitation
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-2 border-yellow-800">
                  <h3 className="text-green-900 font-semibold mb-2">🛡️ Privacy Protected</h3>
                  <p className="text-green-800 text-sm">
                    Your partner will only see what you choose to work on. Items you don't select remain completely hidden, 
                    preserving your autonomy and preventing any pressure or judgment.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentPage('dashboard')}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  🚀 Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'innermost-detail' && selectedInnermost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <WillingBoxDisplay user={user} partnerEmail={selectedInnermost.partnerEmail} innermost={selectedInnermost} />
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h2 className="text-2xl font-bold text-yellow-900 mb-2">Seed Planted!</h2>
              <p className="text-gray-600">
                We've sent an invitation to <strong>{selectedInnermost.partnerEmail}</strong>
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 text-lg">🌱</span>
                  <div>
                    <h3 className="text-yellow-900 font-semibold mb-1">Seed Awaiting Sunlight</h3>
                    <p className="text-yellow-800 text-sm">
                      Your partner needs to join and accept the invitation before your Willing Tree can begin growing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 mb-3">📋 What happens next:</h3>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">1</span>
                    Your partner receives the invitation email
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">2</span>
                    They sign up for The Willing Tree
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">3</span>
                    They accept your invitation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">4</span>
                    You both create your WishLists (up to 12 items each)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">5</span>
                    You secretly select what you're willing to work on
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">6</span>
                    Start the weekly guessing game and score points!
                  </li>
                </ol>
              </div>

              {selectedInnermost.inviteMessage && (
                <div className="bg-green-50 rounded-lg p-4 border border-yellow-800">
                  <h3 className="font-semibold text-green-900 mb-2">💌 Your Message:</h3>
                  <p className="text-green-800 text-sm italic">"{selectedInnermost.inviteMessage}"</p>
                </div>
              )}
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  // Simulate partner acceptance for demo
                  const updatedInnermost = { ...selectedInnermost, status: 'active' as const };
                  setInnermosts(prev => prev.map(i => i.id === selectedInnermost.id ? updatedInnermost : i));
                  setSelectedInnermost(updatedInnermost);
                }}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                🎭 Demo: Simulate Partner Acceptance
              </button>
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Back to Dashboard
              </button>
            </div>

            {selectedInnermost.status === 'active' && (
              <div className="mt-6">
                {/* Primary Call-to-Action: Plant Your Wishes */}
                <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-6 border-4 border-green-600 mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🌿</div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Ready to Plant Your Wishes!</h3>
                    <p className="text-green-800 text-lg mb-4">
                      Your partner has joined! 🎉 Now create your relationship wants list.
                    </p>
                    <button
                      onClick={() => setCurrentPage('plant-wishes')}
                      className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors shadow-lg transform hover:scale-105"
                    >
                      🌱 START: Plant Your Wishes Now
                    </button>
                  </div>
                </div>
                
                {/* Secondary Options */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-green-600 text-xl">🌳</span>
                    <h3 className="font-semibold text-green-900">Tree is Growing!</h3>
                  </div>
                  <p className="text-green-800 text-sm mb-4">
                    Beautiful! Your partner has joined the tree. After planting wishes, you can begin weekly tending.
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        console.log('Willing selection clicked, selectedInnermost:', selectedInnermost);
                        if (!selectedInnermost) {
                          alert('No innermost selected. Please try again.');
                          return;
                        }
                        setCurrentPage('willing-selection');
                      }}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                    >
                      🎯 Select What You'll Work On
                    </button>
                    <button
                      onClick={() => setCurrentPage('weekly-tending')}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                      🌱 Weekly Tending
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'premium-upgrade') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💎</span>
            </div>
            <h2 className="text-3xl font-bold text-yellow-900 mb-2">Upgrade to Premium</h2>
            <p className="text-gray-600">Unlock advanced features to nurture deeper relationship growth</p>
          </div>

          {/* Current vs Premium Comparison */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-4">
              <h3 className="text-xl font-bold">🌟 Just $1 per month</h3>
              <p className="text-purple-100">Cancel anytime • No hidden fees</p>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Free Plan */}
                <div className="text-center">
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-2">🌱 Free Plan</h4>
                    <div className="text-2xl font-bold text-yellow-900 mb-1">$0</div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                  <ul className="text-left space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      1 active Willing Tree
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      Basic weekly growth activities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      Simple scoring system
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      Privacy protection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-400">✗</span>
                      <span className="text-gray-400">Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-400">✗</span>
                      <span className="text-gray-400">Data export</span>
                    </li>
                  </ul>
                </div>

                {/* Premium Plan */}
                <div className="text-center border-2 border-purple-200 rounded-lg p-4 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">RECOMMENDED</span>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 mb-4">
                    <h4 className="text-lg font-semibold text-purple-900 mb-2">💎 Premium Plan</h4>
                    <div className="text-2xl font-bold text-purple-900 mb-1">$1</div>
                    <div className="text-sm text-purple-700">per month</div>
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <strong>Up to 3 active Willing Trees</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      All free features included
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">✨</span>
                      <strong>Advanced growth analytics</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">✨</span>
                      <strong>Complete data export</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">✨</span>
                      <strong>Priority customer support</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">✨</span>
                      <strong>Custom wish categories</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Features Details */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-900 mb-6 text-center">🌟 What You Get with Premium</h3>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌳</span>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-1">Multiple Relationship Trees</h4>
                  <p className="text-gray-600 text-sm">Nurture up to 3 different relationships simultaneously. Perfect for couples with multiple close relationships they want to strengthen - whether romantic partners, family, or close friends.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-1">Advanced Growth Analytics</h4>
                  <p className="text-gray-600 text-sm">Deep insights into your relationship patterns, progress tracking over time, and personalized recommendations for continued growth based on your activity history.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-1">Complete Data Export</h4>
                  <p className="text-gray-600 text-sm">Export all your relationship growth data in multiple formats (JSON, CSV, PDF reports). Keep your memories and track long-term progress outside the app.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-1">Priority Support</h4>
                  <p className="text-gray-600 text-sm">Get priority customer support with faster response times. Direct access to relationship growth experts who can help optimize your experience.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Start Growing Today</h3>
            <p className="mb-4 text-purple-100">Join thousands of couples nurturing stronger relationships</p>
            
            <button
              onClick={() => setCurrentPage('premium-checkout')}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors mr-4"
            >
              🚀 Start Premium - $1/month
            </button>
            
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="text-white hover:text-purple-100 font-medium text-sm underline"
            >
              Maybe later
            </button>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>🔒 Secure payment • Cancel anytime • 30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'premium-checkout') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <button
              onClick={() => setCurrentPage('premium-upgrade')}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h2 className="text-2xl font-bold text-yellow-900 mb-2">Secure Checkout</h2>
            <p className="text-gray-600">Complete your Premium upgrade</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            {/* Order Summary */}
            <div className="bg-purple-50 p-4 border-b">
              <h3 className="font-semibold text-purple-900 mb-2">Order Summary</h3>
              <div className="flex justify-between items-center">
                <span className="text-purple-800">💎 The Willing Tree Premium (Monthly)</span>
                <span className="font-bold text-purple-900">$1.00</span>
              </div>
              <div className="text-xs text-purple-700 mt-1">Billed monthly • Cancel anytime</div>
            </div>

            {/* Payment Form */}
            <div className="p-6">
              <form onSubmit={(e) => {
                e.preventDefault();
                // In real app, this would integrate with Stripe
                setTimeout(() => {
                  setUser(prev => prev ? {
                    ...prev,
                    isPremium: true,
                    premiumSince: new Date()
                  } : prev);
                  setCurrentPage('premium-success');
                }, 2000); // Simulate processing time
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      defaultValue={user?.name}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Full name on card"
                    />
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <input type="checkbox" required className="mt-1" id="terms" />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the <span className="text-purple-600 hover:underline cursor-pointer">Terms of Service</span> and <span className="text-purple-600 hover:underline cursor-pointer">Privacy Policy</span>
                    </label>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="text-green-600">🔒</span>
                    <span>Secured by industry-standard encryption</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all mt-6"
                >
                  💎 Complete Purchase - $1.00
                </button>
              </form>
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-xs text-gray-500">
              <p>🔐 Your payment information is secure and encrypted</p>
              <p>💰 Cancel anytime from your settings • Full refund if canceled within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'premium-success') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <div className="text-sm text-purple-600 font-medium">
              💎 Premium Active
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎉</span>
            </div>
            <h2 className="text-3xl font-bold text-yellow-900 mb-2">Welcome to Premium!</h2>
            <p className="text-gray-600">Your upgrade was successful. You now have access to all Premium features.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-purple-900">💎 Premium Plan Active</span>
                <span className="text-green-600 font-medium text-sm">✓ Activated</span>
              </div>
              <div className="text-sm text-purple-700">
                Next billing date: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </div>
            </div>

            <h3 className="font-semibold text-yellow-900 mb-4">🌟 What's now available:</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-gray-700">Up to 3 active Willing Trees</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-gray-700">Advanced growth analytics and insights</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-gray-700">Complete data export in multiple formats</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-gray-700">Priority customer support</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-gray-700">Custom wish categories</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-yellow-800 mb-6">
            <h3 className="font-semibold text-green-900 mb-2">📧 Confirmation Email Sent</h3>
            <p className="text-green-800 text-sm">
              We've sent a confirmation email to <strong>{user?.email}</strong> with your receipt and subscription details.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              🌳 Go to Dashboard
            </button>
            <button
              onClick={() => setCurrentPage('create-innermost')}
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              🌱 Plant New Tree
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              💚 Questions about your Premium features? Contact us at support@willingbox.com
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'plant-wishes' && selectedInnermost) {
    const suggestions = getWishSuggestions(user?.gender, user?.age);
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <button
              onClick={() => setCurrentPage('innermost-detail')}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back to Tree
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <WillingBoxDisplay user={user} partnerEmail={selectedInnermost.partnerEmail} innermost={selectedInnermost} />
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌿</span>
            </div>
            <h2 className="text-3xl font-bold text-yellow-900 mb-2">Plant Your Wishes</h2>
            <p className="text-gray-600">Create your WishList to grow this Tree. These are hopes for how your relationship grows. Select 12 wishes and mark 1 as Most Wanted.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Your Wishes List */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-green-50 p-4 border-b border-green-200">
                <h3 className="text-lg font-semibold text-green-900 flex items-center gap-2">
                  <span>🌱</span>
                  Your WishList to Grow this Tree ({currentWishes.length}/12)
                </h3>
                <p className="text-sm text-green-700">These are hopes for how your relationship grows</p>
              </div>
              
              <div className="p-4">
                {/* Custom Wish Input */}
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const wishText = formData.get('customWish') as string;
                  const category = formData.get('category') as string;
                  
                  if (wishText.trim() && currentWishes.length < 12) {
                    const newWish: Wish = {
                      id: Date.now().toString(),
                      text: wishText.trim(),
                      category: category || 'Custom',
                      isMostCherished: false,
                      createdAt: new Date()
                    };
                    setCurrentWishes(prev => [...prev, newWish]);
                    (e.target as HTMLFormElement).reset();
                  }
                }} className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="space-y-2">
                    <input
                      name="customWish"
                      type="text"
                      placeholder="Write your own wish..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      maxLength={150}
                      required
                    />
                    <div className="flex gap-2">
                      <select
                        name="category"
                        className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs"
                      >
                        <option value="Custom">Custom</option>
                        <option value="Communication">Communication</option>
                        <option value="Affection & Intimacy">Affection & Intimacy</option>
                        <option value="Quality Time">Quality Time</option>
                        <option value="Household & Life Management">Household</option>
                        <option value="Support & Encouragement">Support</option>
                        <option value="Personal Growth">Personal Growth</option>
                      </select>
                      <button
                        type="submit"
                        disabled={currentWishes.length >= 12}
                        className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 disabled:bg-gray-400"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </form>

                {/* Current Wishes */}
                <div className="space-y-2">
                  {currentWishes.map((wish) => (
                    <div key={wish.id} className={`p-3 rounded-lg border-2 transition-all ${
                      wish.isMostCherished 
                        ? 'border-yellow-300 bg-yellow-50' 
                        : 'border-gray-200 bg-white'
                    }`}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="text-sm text-yellow-900">{wish.text}</p>
                          <div className="flex items-center gap-2 mt-1">
                            {wish.isMostCherished && (
                              <span className="text-xs bg-yellow-100 px-2 py-1 rounded text-yellow-800 flex items-center gap-1">
                                ⭐ Most Cherished
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <button
                            onClick={() => {
                              const cherished = currentWishes.filter(w => w.isMostCherished);
                              if (wish.isMostCherished || cherished.length < 3) {
                                setCurrentWishes(prev => prev.map(w => 
                                  w.id === wish.id ? {...w, isMostCherished: !w.isMostCherished} : w
                                ));
                              } else {
                                alert('✨ You can only mark 3 wishes as Most Cherished (worth double points in the game!)');
                              }
                            }}
                            className={`text-xs px-2 py-1 rounded ${
                              wish.isMostCherished
                                ? 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {wish.isMostCherished ? '⭐' : '☆'}
                          </button>
                          <button
                            onClick={() => {
                              setCurrentWishes(prev => prev.filter(w => w.id !== wish.id));
                            }}
                            className="text-xs text-red-600 hover:text-red-700"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {currentWishes.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p className="text-sm">No wishes planted yet.</p>
                      <p className="text-xs">Add custom wishes above or browse suggestions →</p>
                    </div>
                  )}
                </div>

                {/* Save Button */}
                <div className="mt-6 pt-4 border-t">
                  <button
                    onClick={() => {
                      // Save wishes to the innermost
                      const updatedInnermost = {
                        ...selectedInnermost,
                        userWishes: currentWishes
                      };
                      setInnermosts(prev => prev.map(i => 
                        i.id === selectedInnermost.id ? updatedInnermost : i
                      ));
                      setSelectedInnermost(updatedInnermost);
                      alert(`🌱 Tree wishes planted successfully!\n\n• ${currentWishes.length} wishes added\n• ${currentWishes.filter(w => w.isMostCherished).length} marked as Most Cherished\n\nYour partner can now start their weekly guessing game!`);
                      setCurrentPage('innermost-detail');
                    }}
                    disabled={currentWishes.length === 0}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 transition-colors"
                  >
                    🌳 Save Tree Wishes ({currentWishes.length})
                  </button>
                  
                  <div className="mt-2 text-center">
                    <p className="text-xs text-gray-500">
                      🔒 Your wishes are private until you choose to share them in the weekly game
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions Panel */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-green-50 p-4 border-b-2 border-yellow-800">
                <h3 className="text-lg font-semibold text-green-900 flex items-center gap-2">
                  <span>💡</span>
                  Research-Based Suggestions
                </h3>
                <p className="text-sm text-green-700">
                  Top relationship wishes {user?.gender ? `for ${user.gender === 'female' ? 'women' : user.gender === 'male' ? 'men' : 'people'} ` : ''}
                  {user?.age ? `in their ${Math.floor((user.age || 30) / 10) * 10}s` : ''}
                </p>
              </div>
              
              <div className="p-4 max-h-96 overflow-y-auto">
                {suggestions.map((categoryGroup) => (
                  <div key={categoryGroup.category} className="mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                      <span className="text-sm">
                        {categoryGroup.category === 'Communication' && '🗣️'}
                        {categoryGroup.category === 'Affection & Intimacy' && '💕'}
                        {categoryGroup.category === 'Quality Time' && '⏰'}
                        {categoryGroup.category === 'Household & Life Management' && '🏠'}
                        {categoryGroup.category === 'Support & Encouragement' && '💪'}
                        {categoryGroup.category === 'Personal Growth' && '🌱'}
                      </span>
                      {categoryGroup.category}
                    </h4>
                    <div className="space-y-1">
                      {categoryGroup.wishes.map((wishText, index) => {
                        const alreadyAdded = currentWishes.some(w => w.text === wishText);
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              if (!alreadyAdded && currentWishes.length < 12) {
                                const newWish: Wish = {
                                  id: Date.now().toString() + index,
                                  text: wishText,
                                  category: categoryGroup.category,
                                  isMostCherished: false,
                                  createdAt: new Date()
                                };
                                setCurrentWishes(prev => [...prev, newWish]);
                              }
                            }}
                            disabled={alreadyAdded || currentWishes.length >= 12}
                            className={`w-full text-left p-2 rounded text-sm transition-colors ${
                              alreadyAdded
                                ? 'bg-green-50 text-green-700 border border-green-200'
                                : currentWishes.length >= 12
                                ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-700'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {alreadyAdded ? '✓' : '+'} {wishText}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h3 className="font-semibold text-yellow-900 mb-2">✨ About Most Cherished Wishes</h3>
            <p className="text-yellow-800 text-sm">
              Mark up to 3 wishes as "Most Cherished" - these are worth double points in the weekly guessing game! 
              Choose the ones that would mean the most to you if your partner worked on them.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'weekly-tending' && selectedInnermost) {
    // Initialize partner wishes for demo if not exists
    const partnerWishes = selectedInnermost.partnerWishes || getPartnerWishes();
    if (!selectedInnermost.partnerWishes) {
      const updatedInnermost = { ...selectedInnermost, partnerWishes };
      setInnermosts(prev => prev.map(i => i.id === selectedInnermost.id ? updatedInnermost : i));
      setSelectedInnermost(updatedInnermost);
    }
    
    const currentWeek = getCurrentWeekNumber();
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <button
              onClick={() => setCurrentPage('innermost-detail')}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back to Tree
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <WillingBoxDisplay user={user} partnerEmail={selectedInnermost.partnerEmail} innermost={selectedInnermost} />
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h2 className="text-3xl font-bold text-yellow-900 mb-2">Weekly Tree Tending</h2>
            <p className="text-gray-600">Week {currentWeek}: Choose which of your partner's wishes you're willing to nurture this week</p>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-yellow-800 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">🔒</span>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Your Privacy is Protected</h3>
                <p className="text-green-800 text-sm">
                  Your partner will <strong>never see</strong> which wishes you didn't select. 
                  Only the ones you choose to work on will be part of the guessing game. This preserves your autonomy and prevents any pressure.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-purple-50 p-4 border-b border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
                <span>🌿</span>
                {selectedInnermost.partnerEmail.split('@')[0]}'s Tree Wishes
              </h3>
              <p className="text-sm text-purple-700">
                Select the ones you're willing to work on this week • 
                <span className="font-semibold">{Object.values(willingSelections).filter(Boolean).length}</span> selected
              </p>
            </div>
            
            <div className="p-6">
              <div className="grid gap-4">
                {partnerWishes.map((wish: Wish) => {
                  const isSelected = willingSelections[wish.id] || false;
                  const pointValue = wish.isMostCherished ? 4 : 2; // Double for cherished (2pts base * 2)
                  
                  return (
                    <div
                      key={wish.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                        isSelected
                          ? 'border-purple-300 bg-purple-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                      onClick={() => {
                        setWillingSelections(prev => ({
                          ...prev,
                          [wish.id]: !prev[wish.id]
                        }));
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              isSelected
                                ? 'bg-purple-600 border-purple-600 text-white'
                                : 'border-gray-300'
                            }`}>
                              {isSelected && <span className="text-xs">✓</span>}
                            </div>
                            {wish.isMostCherished && (
                              <span className="text-xs bg-yellow-100 px-2 py-1 rounded text-yellow-800 flex items-center gap-1">
                                ⭐ Most Cherished
                              </span>
                            )}
                            <span className="text-xs bg-purple-100 px-2 py-1 rounded text-purple-700 font-medium">
                              {pointValue} pts if guessed
                            </span>
                          </div>
                          <p className="text-yellow-900 font-medium">{wish.text}</p>
                        </div>
                        <div className={`text-2xl transition-all ${
                          isSelected ? 'text-purple-600' : 'text-gray-300'
                        }`}>
                          {isSelected ? '🌱' : '🌱'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {partnerWishes.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">Your partner hasn't planted their wishes yet.</p>
                  <p className="text-xs">Ask them to complete their tree first!</p>
                </div>
              )}
            </div>
          </div>

          {/* Game Rules */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
              <span>🎯</span>
              How the Weekly Game Works
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <span>🎯</span>
                  Guessing Points (You Guess)
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Guess which wishes your partner worked on</li>
                  <li>• <strong>1 point</strong> for each correct guess</li>
                  <li>• <strong>2 points</strong> for correct Most Cherished guesses</li>
                  <li>• <strong>+3 BONUS</strong> if you guess their Priority 1 choice!</li>
                  <li>• <strong>+2 BONUS</strong> if you guess their Priority 2 choice!</li>
                  <li>• <strong>+1 BONUS</strong> if you guess their Priority 3 choice!</li>
                  <li>• No penalty for wrong guesses</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <span>🎆</span>
                  Performance Points (You Get Guessed)
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Partner guesses your willing selections</li>
                  <li>• <strong>2 points</strong> when they guess you correctly</li>
                  <li>• <strong>4 points</strong> for Most Cherished (double!)</li>
                  <li>• Reward for actually doing the work!</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-900 text-sm">
                <strong>💡 Strategy Tip:</strong> Most Cherished wishes are worth double points but harder to complete. 
                Choose wisely to balance points with achievability!
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                const selectedCount = Object.values(willingSelections).filter(Boolean).length;
                if (selectedCount === 0) {
                  alert('🌱 Please select at least one wish you\'re willing to nurture this week!');
                  return;
                }
                
                // Create weekly game
                const selectedWishIds = Object.entries(willingSelections)
                  .filter(([_, selected]) => selected)
                  .map(([wishId, _]) => wishId);
                
                const weeklyGame: WeeklyGame = {
                  id: Date.now().toString(),
                  innermostId: selectedInnermost.id,
                  weekNumber: currentWeek,
                  startDate: new Date(),
                  endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                  isActive: true,
                  userWillingSelections: selectedWishIds.map(wishId => ({
                    id: Date.now().toString() + wishId,
                    wishId,
                    willingToWork: true,
                    weekNumber: currentWeek,
                    createdAt: new Date()
                  })),
                  partnerWillingSelections: [],
                  userGuesses: [],
                  partnerGuesses: [],
                  userScore: 0,
                  partnerScore: 0
                };
                
                setCurrentWeeklyGame(weeklyGame);
                setCurrentPage('guessing-game');
              }}
              className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              disabled={Object.values(willingSelections).filter(Boolean).length === 0}
            >
              🌱 Continue to Guessing Game ({Object.values(willingSelections).filter(Boolean).length} selected)
            </button>
            
            <button
              onClick={() => setCurrentPage('innermost-detail')}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Save for Later
            </button>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>🔒 Your selections are completely private until you choose to share your results</p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'guessing-game' && currentWeeklyGame) {
    const partnerWishes = selectedInnermost?.partnerWishes || [];
    const userWishes = selectedInnermost?.userWishes || [];
    
    // Simulate partner's willing selections for demo
    const getPartnerWillingDemo = (): string[] => {
      // Partner "chose" to work on some wishes for demo - including priority items
      const allWishIds = userWishes.map(w => w.id);
      const selectedCount = Math.min(Math.floor(allWishIds.length * 0.6), 3);
      return allWishIds.slice(0, selectedCount);
    };
    
    // Simulate partner's willing selections with priorities for testing
    const getPartnerWillingSelectionsDemo = (): WillingSelection[] => {
      if (!selectedInnermost?.partnerWillingSelections) {
        // Create demo partner willing selections
        const selectedWishIds = getPartnerWillingDemo();
        return selectedWishIds.map((wishId, index) => ({
          id: `partner-${Date.now()}-${index}`,
          wishId,
          priority: index + 1, // 1, 2, 3
          createdAt: new Date()
        }));
      }
      return selectedInnermost.partnerWillingSelections;
    };
    
    // Winner celebration service commands
    const celebrationCommands = [
      { emoji: '🌹', text: 'Send flowers', description: 'Beautiful bouquet delivery' },
      { emoji: '🍫', text: 'Chocolate surprise', description: 'Premium chocolate box' },
      { emoji: '💰', text: 'Spot bonus', description: '$25-100 surprise gift' },
      { emoji: '🍾', text: 'Champagne celebration', description: 'Toast your success!' },
      { emoji: '💆', text: 'Spa treatment', description: 'Relaxing massage session' },
      { emoji: '🍴', text: 'Favorite restaurant', description: 'Dinner at your special place' },
      { emoji: '🎥', text: 'Movie night', description: 'Cozy evening with favorites' },
      { emoji: '😍', text: 'Your choice activity', description: 'Whatever makes you happy' },
      { emoji: '🎁', text: 'Surprise gift', description: 'Something you\'ve mentioned wanting' },
      { emoji: '🌈', text: 'Adventure day', description: 'Fun activity together' }
    ];
    
    const getRandomCelebration = () => {
      return celebrationCommands[Math.floor(Math.random() * celebrationCommands.length)];
    };
    
    if (gamePhase === 'guessing') {
      return (
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white shadow-sm border-b">
            <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
              <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
              <div className="text-sm text-purple-600 font-medium">
                Week {currentWeeklyGame.weekNumber} • Guessing Phase
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-8">
            <WillingBoxDisplay user={user} partnerEmail={selectedInnermost?.partnerEmail || ''} innermost={selectedInnermost} />
            
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔮</span>
              </div>
              <h2 className="text-3xl font-bold text-yellow-900 mb-2">Weekly Guessing Game</h2>
              <p className="text-gray-600">
                Guess which of <strong>your wishes</strong> your partner chose to work on this week
              </p>
            </div>

            {/* Your Wishes - Guess Which Partner Selected */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="bg-green-50 p-4 border-b-2 border-yellow-800">
                <h3 className="text-lg font-semibold text-green-900 flex items-center gap-2">
                  <span>🤔</span>
                  Your Tree Wishes - Which did your partner choose?
                </h3>
                <p className="text-sm text-green-700">
                  Earn <strong>1 point</strong> for each correct guess • 
                  <strong>2 points</strong> for Most Cherished • 
                  {Object.values(userGuesses).filter(Boolean).length} guesses made
                </p>
              </div>
              
              <div className="p-6">
                <div className="grid gap-4">
                  {userWishes.map((wish) => {
                    const isGuessed = userGuesses[wish.id] || false;
                    const pointValue = wish.isMostCherished ? 2 : 1;
                    
                    return (
                      <div
                        key={wish.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                          isGuessed
                            ? 'border-green-300 bg-green-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        onClick={() => {
                          setUserGuesses(prev => ({
                            ...prev,
                            [wish.id]: !prev[wish.id]
                          }));
                        }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                isGuessed
                                  ? 'bg-green-600 border-green-600 text-white'
                                  : 'border-gray-300'
                              }`}>
                                {isGuessed && <span className="text-xs">✓</span>}
                              </div>
                              {wish.isMostCherished && (
                                <span className="text-xs bg-yellow-100 px-2 py-1 rounded text-yellow-800 flex items-center gap-1">
                                  ⭐ Most Cherished
                                </span>
                              )}
                              <span className="text-xs bg-green-100 px-2 py-1 rounded text-green-700 font-medium">
                                {pointValue} pt{pointValue > 1 ? 's' : ''} if correct
                              </span>
                            </div>
                            <p className="text-yellow-900 font-medium">{wish.text}</p>
                          </div>
                          <div className={`text-2xl transition-all ${
                            isGuessed ? 'text-green-600' : 'text-gray-300'
                          }`}>
                            {isGuessed ? '🔮' : '❔'}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {userWishes.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p className="text-sm">You haven't planted your wishes yet.</p>
                    <p className="text-xs">Complete your tree first!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Guesses */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  const guessedWishIds = Object.entries(userGuesses)
                    .filter(([_, guessed]) => guessed)
                    .map(([wishId, _]) => wishId);
                  
                  // Simulate partner's actual selections for demo
                  const partnerActualSelections = getPartnerWillingDemo();
                  
                  // Calculate results with priority bonuses
                  let totalPoints = 0;
                  const results = guessedWishIds.map(wishId => {
                    const wish = userWishes.find(w => w.id === wishId)!;
                    const wasCorrect = partnerActualSelections.includes(wishId);
                    
                    // Base points
                    let points = wasCorrect ? (wish.isMostCherished ? 2 : 1) : 0;
                    
                    // Priority bonus: if partner has this in their willing selections
                    const partnerWillingSelections = getPartnerWillingSelectionsDemo();
                    if (wasCorrect && partnerWillingSelections) {
                      const partnerSelection = partnerWillingSelections.find(s => s.wishId === wishId);
                      if (partnerSelection) {
                        // Add priority bonus (Priority 1 = +3, Priority 2 = +2, Priority 3 = +1)
                        const priorityBonus = partnerSelection.priority === 1 ? 3 : 
                                            partnerSelection.priority === 2 ? 2 : 
                                            partnerSelection.priority === 3 ? 1 : 0;
                        points += priorityBonus;
                      }
                    }
                    
                    totalPoints += points;
                    
                    return {
                      wishId,
                      wish,
                      wasCorrect,
                      points
                    };
                  });
                  
                  // Also calculate what partner actually worked on
                  const partnerWorkedOn = partnerActualSelections.map(wishId => {
                    return userWishes.find(w => w.id === wishId)!;
                  }).filter(Boolean);
                  
                  setFinalResults({
                    userGuessResults: results,
                    userTotalPoints: totalPoints,
                    partnerWorkedOn,
                    partnerActualSelections
                  });
                  setGamePhase('results');
                }}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                disabled={Object.values(userGuesses).filter(Boolean).length === 0}
              >
                🎆 Submit Guesses & See Results ({Object.values(userGuesses).filter(Boolean).length} guesses)
              </button>
              
              <button
                onClick={() => setCurrentPage('weekly-tending')}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Back to Tending
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    // Results Phase
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <div className="text-sm text-green-600 font-medium">
              Week {currentWeeklyGame.weekNumber} • Results
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <WillingBoxDisplay user={user} partnerEmail={selectedInnermost?.partnerEmail || ''} innermost={selectedInnermost} />
          
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🎆</span>
            </div>
            <h2 className="text-3xl font-bold text-yellow-900 mb-2">Week {currentWeeklyGame.weekNumber} Results</h2>
            <p className="text-gray-600">See how your guesses matched your partner's actual selections</p>
          </div>

          {/* Score Summary */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border border-green-200 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Your Guessing Score</h3>
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {finalResults?.userTotalPoints || 0} pts
                </div>
                <p className="text-sm text-green-700">
                  {finalResults?.userGuessResults?.filter((r: any) => r.wasCorrect).length || 0} correct guesses
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Your Performance Score</h3>
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {/* Calculate performance points based on willing selections */}
                  {currentWeeklyGame.userWillingSelections.reduce((total, selection) => {
                    const wish = partnerWishes.find(w => w.id === selection.wishId);
                    return total + (wish?.isMostCherished ? 4 : 2);
                  }, 0)} pts
                </div>
                <p className="text-sm text-green-700">
                  {currentWeeklyGame.userWillingSelections.length} wishes you committed to
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-green-200 text-center">
              <div className="text-2xl font-bold text-yellow-900">
                Total: {(finalResults?.userTotalPoints || 0) + currentWeeklyGame.userWillingSelections.reduce((total, selection) => {
                  const wish = partnerWishes.find(w => w.id === selection.wishId);
                  return total + (wish?.isMostCherished ? 4 : 2);
                }, 0)} points this week
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Your Guesses */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-green-50 p-4 border-b-2 border-yellow-800">
                <h3 className="text-lg font-semibold text-green-900">🔮 Your Guesses</h3>
                <p className="text-sm text-green-700">How well did you predict your partner?</p>
              </div>
              
              <div className="p-4">
                <div className="space-y-3">
                  {finalResults?.userGuessResults?.map((result: any) => (
                    <div key={result.wishId} className={`p-3 rounded-lg border-2 ${
                      result.wasCorrect
                        ? 'border-green-300 bg-green-50'
                        : 'border-red-200 bg-red-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-yellow-900">{result.wish.text}</p>
                          <div className="flex items-center gap-2 mt-1">
                            {result.wish.isMostCherished && (
                              <span className="text-xs bg-yellow-100 px-2 py-1 rounded text-yellow-800">
                                ⭐ Most Cherished
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${
                            result.wasCorrect ? 'text-green-600' : 'text-red-500'
                          }`}>
                            {result.wasCorrect ? '✓' : '✗'}
                          </div>
                          <div className="text-xs text-gray-600">
                            {result.points} pts
                          </div>
                        </div>
                      </div>
                    </div>
                  )) || (
                    <div className="text-center py-4 text-gray-500 text-sm">
                      No guesses made
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* What Partner Actually Worked On */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-purple-50 p-4 border-b border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900">🌱 Partner's Actual Choices</h3>
                <p className="text-sm text-purple-700">What they committed to work on</p>
              </div>
              
              <div className="p-4">
                <div className="space-y-3">
                  {finalResults?.partnerWorkedOn?.map((wish: Wish) => (
                    <div key={wish.id} className="p-3 rounded-lg border-2 border-purple-200 bg-purple-50">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-yellow-900">{wish.text}</p>
                          <div className="flex items-center gap-2 mt-1">
                            {wish.isMostCherished && (
                              <span className="text-xs bg-yellow-100 px-2 py-1 rounded text-yellow-800">
                                ⭐ Most Cherished
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${
                            finalResults.userGuessResults.some((r: any) => r.wishId === wish.id && r.wasCorrect)
                              ? 'text-green-600' : 'text-orange-500'
                          }`}>
                            {finalResults.userGuessResults.some((r: any) => r.wishId === wish.id && r.wasCorrect)
                              ? '🎯' : '😳'
                            }
                          </div>
                          <div className="text-xs text-gray-600">
                            {finalResults.userGuessResults.some((r: any) => r.wishId === wish.id && r.wasCorrect)
                              ? 'Guessed!' : 'Missed'
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )) || (
                    <div className="text-center py-4 text-gray-500 text-sm">
                      Partner made no selections
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Winner Celebration */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-400 mb-6">
            <h3 className="text-xl font-bold text-yellow-900 mb-3 text-center">🎆 Celebrate Your Success!</h3>
            <div className="bg-white rounded-lg p-4 border border-yellow-300">
              <div className="text-center">
                <div className="text-4xl mb-3">{getRandomCelebration().emoji}</div>
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">
                  Winner's Reward: {getRandomCelebration().text}
                </h4>
                <p className="text-yellow-800 text-sm mb-3">
                  {getRandomCelebration().description}
                </p>
                <p className="text-yellow-700 text-xs italic">
                  🎉 Great relationships deserve celebration! Treat yourselves for the growth you're creating together.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('innermost-detail')}
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              🌳 Return to Tree
            </button>
            
            <button
              onClick={() => {
                // Start new week
                setCurrentWeeklyGame(null);
                setCurrentPage('weekly-tending');
              }}
              className="px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors"
            >
              🌱 Start Next Week
            </button>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h3 className="font-semibold text-yellow-900 mb-2">📊 Weekly Growth Reflection</h3>
            <p className="text-yellow-800 text-sm">
              Take a moment to discuss this week's results with your partner. What worked well? 
              What was challenging? Use these insights to grow even stronger next week!
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'willing-selection') {
    if (!selectedInnermost) {
      return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-red-600 mb-4">⚠️ No Innermost Selected</h2>
            <p className="text-gray-600 mb-4">Please select an innermost relationship first.</p>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      );
    }
    const partnerWishes = selectedInnermost.partnerWishes || getPartnerWishes();
    
    return (
      <div className="min-h-screen bg-green-50">
        <div className="bg-white shadow-md border-b-4 border-yellow-800">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <button
              onClick={() => setCurrentPage('innermost-detail')}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back to Tree
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-10">
          <WillingBoxDisplay user={user} partnerEmail={selectedInnermost.partnerEmail} innermost={selectedInnermost} />
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-800">
              <span className="text-3xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-yellow-900 mb-2">Select Your Willing List</h2>
            <p className="text-gray-600 text-lg">
              Choose 3 items from your partner's WishList that you're willing to work on. 
              <strong>Prioritize them 1-3</strong> - Priority #1 gets you double points if they guess it!
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border-2 border-yellow-800 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">🎯</span>
              <div>
                <h3 className="font-semibold text-purple-900 mb-1">Priority Bonus System</h3>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• <strong>Priority 1:</strong> Double points (4pts) if partner guesses this</li>
                  <li>• <strong>Priority 2:</strong> Standard points (2pts) if partner guesses this</li>
                  <li>• <strong>Priority 3:</strong> Standard points (2pts) if partner guesses this</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-50 p-4 border-b-2 border-yellow-800">
              <h3 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
                <span>🌱</span>
                Partner's WishList
              </h3>
              <p className="text-sm text-purple-700">
                Select exactly 3 items and assign priorities • 
                <span className="font-semibold">{currentWillingSelections.length}/3</span> selected
              </p>
            </div>
            
            <div className="p-6">
              <div className="grid gap-4">
                {partnerWishes.map((wish: Wish) => {
                  const selection = currentWillingSelections.find(s => s.wishId === wish.id);
                  const isSelected = !!selection;
                  const priority = selection?.priority || 0;
                  
                  return (
                    <div
                      key={wish.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                        isSelected
                          ? 'border-purple-300 bg-purple-50'
                          : 'border-yellow-800 bg-white hover:border-purple-200'
                      }`}
                      onClick={() => {
                        if (isSelected) {
                          // Remove selection
                          setCurrentWillingSelections(prev => prev.filter(s => s.wishId !== wish.id));
                        } else if (currentWillingSelections.length < 3) {
                          // Add selection with next available priority
                          const nextPriority = currentWillingSelections.length + 1;
                          const newSelection: WillingSelection = {
                            id: Date.now().toString(),
                            wishId: wish.id,
                            priority: nextPriority,
                            createdAt: new Date()
                          };
                          setCurrentWillingSelections(prev => [...prev, newSelection]);
                        }
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                              isSelected
                                ? 'bg-purple-600 border-purple-600 text-white'
                                : 'border-yellow-800 text-yellow-900'
                            }`}>
                              {isSelected ? priority : '?'}
                            </div>
                            
                            {wish.isMostCherished && (
                              <span className="text-xs bg-yellow-100 px-2 py-1 rounded text-yellow-800 flex items-center gap-1">
                                ⭐ Most Cherished
                              </span>
                            )}
                            
                            {isSelected && (
                              <span className="text-xs bg-purple-100 px-2 py-1 rounded text-purple-800 font-medium">
                                Priority {priority} {priority === 1 ? '(+3 bonus!)' : priority === 2 ? '(+2 bonus)' : priority === 3 ? '(+1 bonus)' : ''}
                              </span>
                            )}
                          </div>
                          
                          <p className="text-yellow-900 font-medium">{wish.text}</p>
                          
                          {isSelected && (
                            <div className="mt-2 flex gap-1">
                              {[1,2,3].map(p => (
                                <button
                                  key={p}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Update priority
                                    setCurrentWillingSelections(prev => 
                                      prev.map(s => s.wishId === wish.id ? {...s, priority: p} : s)
                                    );
                                  }}
                                  className={`w-6 h-6 rounded-full text-xs font-bold ${
                                    p === priority
                                      ? 'bg-purple-600 text-white'
                                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                  }`}
                                >
                                  {p}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className={`text-2xl transition-all ${
                          isSelected ? 'text-purple-600' : 'text-gray-300'
                        }`}>
                          {isSelected ? '✅' : '⭕'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => {
                if (currentWillingSelections.length !== 3) {
                  alert(`🎯 Please select exactly 3 items! You currently have ${currentWillingSelections.length} selected.`);
                  return;
                }
                
                // Save willing selections to the innermost
                const updatedInnermost = {
                  ...selectedInnermost,
                  userWillingSelections: currentWillingSelections
                };
                setInnermosts(prev => prev.map(i => 
                  i.id === selectedInnermost.id ? updatedInnermost : i
                ));
                setSelectedInnermost(updatedInnermost);
                
                alert(`🎯 Willing selections saved!\n\n• ${currentWillingSelections.length} items selected\n• Priority 1: ${partnerWishes.find(w => w.id === currentWillingSelections.find(s => s.priority === 1)?.wishId)?.text || 'None'}\n\nReady for weekly games!`);
                setCurrentPage('innermost-detail');
              }}
              disabled={currentWillingSelections.length !== 3}
              className="flex-1 bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 transition-colors text-lg"
            >
              🌳 Save Willing List ({currentWillingSelections.length}/3)
            </button>
            
            <button
              onClick={() => setCurrentPage('innermost-detail')}
              className="px-6 py-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Save for Later
            </button>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-600">
            <h3 className="font-semibold text-yellow-900 mb-2">🎯 Strategic Tip</h3>
            <p className="text-yellow-800 text-sm">
              Choose your Priority 1 carefully! If your partner selects that item to work on, you get 3 extra points. 
              Think about what would mean the most to them and what you can realistically commit to.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'settings') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-800">🌳 The Willing Tree</h1>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-800">
              <span className="text-2xl">⚙️</span>
            </div>
            <h2 className="text-2xl font-bold text-yellow-900 mb-2">Settings for {user?.name}</h2>
            <p className="text-gray-600">Customize your relationship growth experience</p>
          </div>

          <div className="space-y-6">
            {/* Profile Settings */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">👤</span>
                Profile Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-yellow-900">Name</p>
                    <p className="text-sm text-gray-600">{user?.name}</p>
                  </div>
                  <button
                    onClick={() => {
                      const newName = prompt('Enter new name:', user?.name);
                      if (newName && newName.trim()) {
                        setUser(prev => prev ? {...prev, name: newName.trim()} : prev);
                      }
                    }}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-yellow-900">Email</p>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                  </div>
                  <span className="text-xs text-gray-500">Contact support to change</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-yellow-900">Age</p>
                    <p className="text-sm text-gray-600">{user?.age || 'Not specified'}</p>
                  </div>
                  <button
                    onClick={() => {
                      const newAge = prompt('Enter your age:', user?.age?.toString() || '');
                      if (newAge && !isNaN(parseInt(newAge))) {
                        setUser(prev => prev ? {...prev, age: parseInt(newAge)} : prev);
                      }
                    }}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-yellow-900">Gender</p>
                    <p className="text-sm text-gray-600">{user?.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1).replace('-', ' ') : 'Not specified'}</p>
                  </div>
                  <button
                    onClick={() => {
                      const options = ['male', 'female', 'non-binary', 'prefer-not-to-say'];
                      const newGender = prompt(`Select gender:\n\n1. Male\n2. Female\n3. Non-binary\n4. Prefer not to say\n\nEnter number (1-4):`);
                      const index = parseInt(newGender || '') - 1;
                      if (index >= 0 && index < options.length) {
                        setUser(prev => prev ? {...prev, gender: options[index] as any} : prev);
                      }
                    }}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">🔔</span>
                Notification Preferences
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-yellow-900">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive tree updates via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={(e) => setSettings(prev => ({...prev, emailNotifications: e.target.checked}))}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full transition-colors border border-yellow-800 ${settings.emailNotifications ? 'bg-green-600' : 'bg-gray-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${settings.emailNotifications ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-yellow-900">Push Notifications</p>
                    <p className="text-sm text-gray-600">Get notified on your device</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={(e) => setSettings(prev => ({...prev, pushNotifications: e.target.checked}))}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full transition-colors border border-yellow-800 ${settings.pushNotifications ? 'bg-green-600' : 'bg-gray-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${settings.pushNotifications ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-yellow-900">Weekly Tree Reminders</p>
                    <p className="text-sm text-gray-600">Reminders to tend your Willing Tree</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.weeklyReminders}
                      onChange={(e) => setSettings(prev => ({...prev, weeklyReminders: e.target.checked}))}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full transition-colors border border-yellow-800 ${settings.weeklyReminders ? 'bg-green-600' : 'bg-gray-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${settings.weeklyReminders ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-yellow-900">Growth Score Notifications</p>
                    <p className="text-sm text-gray-600">Get notified when scores are updated</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.scoreNotifications}
                      onChange={(e) => setSettings(prev => ({...prev, scoreNotifications: e.target.checked}))}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full transition-colors border border-yellow-800 ${settings.scoreNotifications ? 'bg-green-600' : 'bg-gray-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${settings.scoreNotifications ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Subscription Management */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
                <span className="text-purple-600">💎</span>
                Subscription Management
              </h3>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border-2 border-red-200 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-semibold text-red-900">Current Plan: Free (Donation-Based)</p>
                    <p className="text-sm text-red-700">1 active Willing Tree</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-red-900">Pay What You Feel</p>
                    <p className="text-xs text-red-700">after experiencing value</p>
                  </div>
                </div>
                <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                  <p className="text-red-800 text-sm font-semibold flex items-center gap-2">
                    ⚠️ WARNING: You will likely spend more on Free than Premium!
                  </p>
                  <p className="text-red-700 text-xs mt-1">
                    Free users often donate $5-20+ after experiencing the value. Premium is just $1/month.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-yellow-900">Premium Features ($1/month):</p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Up to 3 active Willing Trees</li>
                  <li>• Advanced growth analytics & insights</li>
                  <li>• Priority customer support</li>
                  <li>• Export your tree data</li>
                  <li>• Custom wish categories</li>
                </ul>
                <div className="mt-3 p-2 bg-yellow-50 border border-yellow-600 rounded">
                  <p className="text-yellow-900 text-xs font-semibold">
                    📊 Free Plan: NO analytics, NO export - experience the value, then donate what it's worth to you!
                  </p>
                </div>
                
                <button
                  onClick={() => setCurrentPage('premium-upgrade')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  🌟 Upgrade to Premium - $1/month
                </button>
              </div>
            </div>

            {/* Privacy & Data */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">🛡️</span>
                Privacy & Data
              </h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">🔒</span>
                    <div>
                      <h4 className="font-semibold text-green-900 mb-1">Your Privacy is Protected</h4>
                      <p className="text-green-800 text-sm">
                        Your willing selections are never shared with your partner. 
                        Only what you choose to nurture is visible, preserving your autonomy.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-yellow-900">Export My Data</p>
                    <p className="text-sm text-gray-600">Download all your tree data</p>
                  </div>
                  <button
                    onClick={() => {
                      const data = {
                        user,
                        innermosts,
                        settings,
                        exportDate: new Date().toISOString(),
                        note: 'This is your The Willing Tree tree data export'
                      };
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `willing-box-tree-${user?.name?.replace(/\\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.json`;
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                      alert('🌿 Tree data exported successfully!');
                    }}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    📥 Export
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">⚠️</span>
                Account Management
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-yellow-900">Sign Out</p>
                    <p className="text-sm text-gray-600">Sign out of your account</p>
                  </div>
                  <button
                    onClick={() => {
                      // Clear all stored data on logout
                      localStorage.removeItem('willingTree_user');
                      localStorage.removeItem('willingTree_innermosts');
                      localStorage.removeItem('willingTree_selectedInnermost');
                      setUser(null);
                      setInnermosts([]);
                      setSelectedInnermost(null);
                      setCurrentPage('welcome');
                    }}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Sign Out
                  </button>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-red-900">Delete Account</p>
                      <p className="text-sm text-red-700">Permanently delete your tree and all data</p>
                    </div>
                    <button
                      onClick={() => {
                        const confirm = window.confirm('🚨 Are you absolutely sure?\\n\\nThis will permanently delete:\\n• Your account\\n• All Willing Trees\\n• All growth data\\n• All settings\\n\\nThis action cannot be undone!');
                        if (confirm) {
                          alert('🌿 In a real app, this would:\\n\\n• Delete all user data from servers\\n• Cancel subscriptions\\n• Send confirmation email\\n• Redirect to goodbye page\\n\\nFor demo: Account deletion confirmed.');
                          setUser(null);
                          setInnermosts([]);
                          setCurrentPage('welcome');
                        }
                      }}
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              💚 Questions? Contact us at support@willingbox.com
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-yellow-900">🌳 Willing Box</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">🌱 {user?.name}</span>
            <button
              onClick={() => {
                // Clear all stored data on logout
                localStorage.removeItem('willingTree_user');
                localStorage.removeItem('willingTree_innermosts');
                localStorage.removeItem('willingTree_selectedInnermost');
                setUser(null);
                setInnermosts([]);
                setSelectedInnermost(null);
                setCurrentPage('welcome');
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-yellow-900 mb-2">Welcome to Your Dashboard!</h2>
          <p className="text-gray-600">Ready to start growing your relationships?</p>
        </div>

        {/* Existing Innermosts */}
        {innermosts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-yellow-900 mb-4">🌳 Your Growing Relationships</h2>
            <div className="grid gap-4">
              {innermosts.map((innermost) => {
                const partnerWishes = innermost.partnerWishes || [];
                const userWillingSelections = innermost.userWillingSelections || [];
                const hasWishes = innermost.userWishes && innermost.userWishes.length > 0;
                const hasWillingSelections = userWillingSelections.length > 0;
                
                return (
                  <div key={innermost.id} className="bg-white rounded-lg p-6 shadow-lg border-2 border-yellow-800">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-bold text-yellow-900 text-lg">
                          🌳 {innermost.partnerEmail.split('@')[0]}
                        </div>
                        <div className="text-sm text-gray-600">{innermost.partnerEmail}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        innermost.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {innermost.status === 'active' ? '🌳 Growing' : '🌱 Sprouting'}
                      </div>
                    </div>
                    
                    {/* Connection Summary */}
                    <div className="bg-green-50 rounded-lg p-4 mb-4 border border-green-200">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-green-900">Your Setup:</div>
                          <div className="text-green-700">
                            • Wishes: {hasWishes ? `${innermost.userWishes!.length} planted` : 'Not planted'}
                            <br />
                            • Willing: {hasWillingSelections ? `${userWillingSelections.length} selected` : 'Not selected'}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-green-900">Partner's Setup:</div>
                          <div className="text-green-700">
                            • Wishes: {partnerWishes.length > 0 ? `${partnerWishes.length} planted` : 'Not planted'}
                            <br />
                            • Willing: {innermost.partnerWillingSelections ? `${innermost.partnerWillingSelections.length} selected` : 'Not selected'}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => {
                          setSelectedInnermost(innermost);
                          setCurrentPage('innermost-detail');
                        }}
                        className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                      >
                        🌳 View Tree
                      </button>
                      
                      {!hasWishes && (
                        <button
                          onClick={() => {
                            setSelectedInnermost(innermost);
                            setCurrentPage('plant-wishes');
                          }}
                          className="bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                        >
                          🌱 Plant Wishes
                        </button>
                      )}
                      
                      {!hasWillingSelections && partnerWishes.length > 0 && (
                        <button
                          onClick={() => {
                            setSelectedInnermost(innermost);
                            setCurrentPage('willing-selection');
                          }}
                          className="bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                        >
                          🎯 Select Willing
                        </button>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-3">
                      Created {new Date(innermost.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">
              {innermosts.length === 0 ? '🌱 Plant Your First Seed' : '🌿 Plant Another Seed'}
            </h3>
            <p className="text-gray-600 mb-4">
              {innermosts.length === 0 
                ? 'Connect with someone special and begin your journey of intentional relationship growth.' 
                : 'Cultivate more relationships! Premium users can tend up to 3 growing trees.'
              }
            </p>
            <button
              onClick={() => setCurrentPage('create-innermost')}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
              disabled={innermosts.length >= 3}
            >
              {innermosts.length >= 3 ? '🌳 Tree Full (3)' : `Plant Seed ${innermosts.length > 0 ? `(${innermosts.length}/3)` : ''}`}
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">📋 How It Works</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Create WishList (up to 12 items)</li>
              <li>• Select what you're willing to work on</li>
              <li>• Play weekly guessing games</li>
              <li>• Score points: 1pt guesser, 2pt performer</li>
              <li>• Privacy protected - partners never see unselected items</li>
              <li>• Perfect for romantic, family, and business relationships</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚙️ Account Settings</h3>
            <p className="text-gray-600 mb-4">Manage your profile and subscription.</p>
            <button
              onClick={() => setCurrentPage('settings')}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Open Settings
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">✨ Premium Features</h3>
            <p className="text-purple-700 mb-4">Unlock advanced relationship insights for just $1/month.</p>
            <button
              onClick={() => setCurrentPage('premium-upgrade')}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Upgrade to Premium
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            🎯 The complete Willing Tree experience: Privacy-first relationship growth through weekly intentional actions
          </p>
        </div>
      </div>
    </div>
  );
}