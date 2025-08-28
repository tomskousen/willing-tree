import { FC, useState, useEffect } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { FirestoreService } from '../../services/firestoreService';
import { SubscriptionService } from '../../services/subscriptionService';
import { Innermost } from '../../types';
import { toast } from 'react-hot-toast';
import { Heart, Plus, Users, Calendar, Star, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PairingInvite {
  email: string;
  message?: string;
}

export const InnermostsPage: FC = () => {
  const { user } = useAuthStore();
  const [innermosts, setInnermosts] = useState<Innermost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [pairingForm, setPairingForm] = useState<PairingInvite>({ email: '', message: '' });
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    if (user?.id) {
      loadInnermosts();
    }
  }, [user?.id]);

  const loadInnermosts = async () => {
    if (!user?.id) return;
    
    try {
      setIsLoading(true);
      const userInnermosts = await FirestoreService.getUserInnermosts(user.id);
      setInnermosts(userInnermosts);
    } catch (error) {
      console.error('Error loading innermosts:', error);
      toast.error('Failed to load your relationships');
    } finally {
      setIsLoading(false);
    }
  };

  const canCreateNewInnermost = (): boolean => {
    if (!user) return false;
    return SubscriptionService.canCreateInnermost(user, innermosts.length);
  };

  const handleCreateInnermost = async () => {
    if (!user || !pairingForm.email.trim()) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (pairingForm.email === user.email) {
      toast.error('You cannot pair with yourself');
      return;
    }

    try {
      setIsCreating(true);

      // Generate a unique pairing code
      const pairingCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      
      const newInnermost: Omit<Innermost, 'id' | 'createdAt'> = {
        partnerA: user.id,
        partnerB: '', // Will be filled when partner accepts
        partnerAEmail: user.email,
        partnerBEmail: pairingForm.email.trim().toLowerCase(),
        status: 'pending',
        pairingCode,
        inviteMessage: pairingForm.message?.trim() || undefined
      };

      const createdInnermost = await FirestoreService.createInnermost(newInnermost);
      
      // Add to local state
      setInnermosts(prev => [...prev, createdInnermost]);
      
      // Reset form
      setPairingForm({ email: '', message: '' });
      setShowCreateForm(false);
      
      toast.success(`Invitation sent to ${pairingForm.email}!`);
      
    } catch (error) {
      console.error('Error creating innermost:', error);
      toast.error('Failed to send invitation');
    } finally {
      setIsCreating(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'paused': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Heart className="w-4 h-4" />;
      case 'pending': return <Calendar className="w-4 h-4" />;
      case 'paused': return <Settings className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const getPartnerEmail = (innermost: Innermost): string => {
    return innermost.partnerA === user?.id ? innermost.partnerBEmail : innermost.partnerAEmail;
  };

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-300 rounded w-1/3"></div>
          <div className="space-y-3">
            <div className="h-20 bg-gray-300 rounded"></div>
            <div className="h-20 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            My Innermosts
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            {innermosts.length} of {SubscriptionService.getUserPlan(user!).maxInnermosts} relationships
          </p>
        </div>
        
        {canCreateNewInnermost() && (
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Innermost
          </button>
        )}
      </div>

      {/* Create Innermost Modal */}
      <AnimatePresence>
        {showCreateForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowCreateForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">Invite Someone Special</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Their Email Address
                  </label>
                  <input
                    type="email"
                    value={pairingForm.email}
                    onChange={(e) => setPairingForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="partner@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Personal Message (Optional)
                  </label>
                  <textarea
                    value={pairingForm.message}
                    onChange={(e) => setPairingForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Hey! I'd love to grow our relationship together using Willing Box..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateInnermost}
                  disabled={!pairingForm.email.trim() || isCreating}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isCreating ? 'Sending...' : 'Send Invitation'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Innermosts List */}
      <div className="space-y-4">
        {innermosts.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Innermosts Yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start building deeper connections by inviting someone special.
            </p>
            {canCreateNewInnermost() && (
              <button
                onClick={() => setShowCreateForm(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Create Your First Innermost
              </button>
            )}
          </div>
        ) : (
          innermosts.map((innermost) => (
            <motion.div
              key={innermost.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(innermost.status)}`}>
                      {getStatusIcon(innermost.status)}
                      {innermost.status.charAt(0).toUpperCase() + innermost.status.slice(1)}
                    </div>
                    <span className="text-sm text-gray-500">
                      Created {innermost.createdAt.toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900 font-medium">
                      {getPartnerEmail(innermost)}
                    </span>
                  </div>
                  
                  {innermost.inviteMessage && (
                    <p className="text-sm text-gray-600 italic ml-6">
                      "{innermost.inviteMessage}"
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  {innermost.status === 'active' && (
                    <Link
                      to={`/innermosts/${innermost.id}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-sm transition-colors"
                    >
                      View
                    </Link>
                  )}
                  
                  {innermost.status === 'pending' && (
                    <span className="text-sm text-yellow-600 font-medium">
                      Waiting for response
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Upgrade Prompt */}
      {!canCreateNewInnermost() && innermosts.length >= 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-green-200 rounded-lg p-4 mt-6"
        >
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-green-600" />
            <div className="flex-1">
              <h3 className="font-semibold text-green-900">Want More Relationships?</h3>
              <p className="text-sm text-green-700">
                Upgrade to Premium to manage up to 3 active Innermosts and unlock advanced features.
              </p>
            </div>
            <Link
              to="/subscription"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Upgrade
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};