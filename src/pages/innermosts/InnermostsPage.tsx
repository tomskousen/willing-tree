import { FC, useState, useEffect } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { FirestoreService } from '../../services/firestoreService';
import { SubscriptionService } from '../../services/subscriptionService';
import type { Innermost } from '../../types/index';
import { toast } from 'react-hot-toast';
import { TreePine, Plus, Users, Calendar, Star, Settings, Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sendInviteEmail } from '../../services/emailService';
import { smsService } from '../../services/sms.service';

interface PairingInvite {
  email: string;
  phone?: string;
  message?: string;
  inviteMethod: 'email' | 'sms';
}

export const InnermostsPage: FC = () => {
  const { user } = useAuthStore();
  const [innermosts, setInnermosts] = useState<Innermost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [pairingForm, setPairingForm] = useState<PairingInvite>({ email: '', phone: '', message: '', inviteMethod: 'email' });
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
    if (!user) return;

    // Validate based on invite method
    if (pairingForm.inviteMethod === 'email') {
      if (!pairingForm.email.trim()) {
        toast.error('Please enter a valid email address');
        return;
      }
      if (pairingForm.email === user.email) {
        toast.error('You cannot pair with yourself');
        return;
      }
    } else if (pairingForm.inviteMethod === 'sms') {
      if (!pairingForm.phone?.trim() || !smsService.isValidPhoneNumber(pairingForm.phone)) {
        toast.error('Please enter a valid phone number');
        return;
      }
    }

    try {
      setIsCreating(true);

      // Generate a unique pairing code
      const pairingCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      
      const newInnermost: Omit<Innermost, 'id' | 'createdAt'> = {
        partnerA: user.id,
        partnerB: '', // Will be filled when partner accepts
        partnerAName: user.displayName || user.email,
        partnerBName: '',
        partnerAEmail: user.email,
        partnerBEmail: pairingForm.email.trim().toLowerCase(),
        currentWeek: 0,
        status: 'pending',
        pairingCode,
        inviteMessage: pairingForm.message?.trim() || undefined
      };

      const createdInnermost = await FirestoreService.createInnermost(newInnermost);
      
      // Send invitation based on method
      if (pairingForm.inviteMethod === 'email') {
        await sendInviteEmail({
          partnerEmail: pairingForm.email,
          senderName: user.displayName || user.email,
          senderEmail: user.email,
          inviteMessage: pairingForm.message,
          appUrl: `${window.location.origin}/pair?code=${pairingCode}`
        });
      } else if (pairingForm.inviteMethod === 'sms' && pairingForm.phone) {
        await smsService.sendPairingInviteSMS({
          toPhone: smsService.formatPhoneNumber(pairingForm.phone),
          fromName: user.displayName || user.email,
          pairingCode: pairingCode,
          message: pairingForm.message
        });
      }
      
      // Add to local state
      setInnermosts(prev => [...prev, createdInnermost]);
      
      // Reset form
      setPairingForm({ email: '', phone: '', message: '', inviteMethod: 'email' });
      setShowCreateForm(false);
      
      const recipient = pairingForm.inviteMethod === 'email' ? pairingForm.email : pairingForm.phone;
      toast.success(`Invitation sent to ${recipient}!`);
      
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
      case 'active': return <TreePine className="w-4 h-4" />;
      case 'pending': return <Calendar className="w-4 h-4" />;
      case 'paused': return <Settings className="w-4 h-4" />;
      default: return <TreePine className="w-4 h-4" />;
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
          <div>
            <h1 className="text-3xl font-bold text-tree-900">The WillingTree</h1>
            <h2 className="text-lg text-tree-700 font-medium flex items-center gap-2 mt-1">
              <TreePine className="w-5 h-5 text-primary-600" />
              My Growing Trees
            </h2>
            <p className="text-tree-600 text-sm mt-2">
              {innermosts.length} of {SubscriptionService.getUserPlan(user!).maxInnermosts} trees growing
            </p>
          </div>
        </div>
        
        {canCreateNewInnermost() && (
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <TreePine className="w-4 h-4" />
            Plant New Tree
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
              <h2 className="text-xl font-bold mb-4 text-tree-800">Plant a Tree Together 🌳</h2>
              
              <div className="space-y-4">
                {/* Invite Method Toggle */}
                <div className="flex gap-2 p-1 bg-bark-100 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setPairingForm(prev => ({ ...prev, inviteMethod: 'email' }))}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      pairingForm.inviteMethod === 'email'
                        ? 'bg-white text-primary-700 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setPairingForm(prev => ({ ...prev, inviteMethod: 'sms' }))}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      pairingForm.inviteMethod === 'sms'
                        ? 'bg-white text-primary-700 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Text/SMS
                  </button>
                </div>

                {/* Email Input */}
                {pairingForm.inviteMethod === 'email' && (
                  <div>
                    <label className="block text-sm font-medium text-tree-700 mb-1">
                      Their Email Address
                    </label>
                    <input
                      type="email"
                      value={pairingForm.email}
                      onChange={(e) => setPairingForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="partner@example.com"
                      className="w-full px-3 py-2 border-2 border-tree-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                )}

                {/* Phone Input */}
                {pairingForm.inviteMethod === 'sms' && (
                  <div>
                    <label className="block text-sm font-medium text-tree-700 mb-1">
                      Their Phone Number
                    </label>
                    <input
                      type="tel"
                      value={pairingForm.phone}
                      onChange={(e) => setPairingForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="(555) 123-4567"
                      className="w-full px-3 py-2 border-2 border-tree-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-tree-700 mb-1">
                    Personal Message (Optional)
                  </label>
                  <textarea
                    value={pairingForm.message}
                    onChange={(e) => setPairingForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Let's grow our relationship together with The Willing Tree..."
                    rows={3}
                    className="w-full px-3 py-2 border-2 border-tree-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  disabled={(pairingForm.inviteMethod === 'email' ? !pairingForm.email.trim() : !pairingForm.phone?.trim()) || isCreating}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isCreating ? 'Planting...' : '🌱 Plant Tree Together'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Innermosts List */}
      <div className="space-y-4">
        {innermosts.length === 0 ? (
          <div className="text-center py-12 bg-bark-50 rounded-xl p-8">
            <TreePine className="w-16 h-16 text-tree-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-tree-900 mb-2">
              No Trees Growing Yet
            </h3>
            <p className="text-tree-700 mb-6">
              Start nurturing relationships by planting a tree with someone special.
            </p>
            {canCreateNewInnermost() && (
              <button
                onClick={() => setShowCreateForm(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
              >
                <TreePine className="w-5 h-5" />
                Plant Your First Tree
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
                      className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-md text-sm transition-colors"
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
            <Star className="w-6 h-6 text-primary-600" />
            <div className="flex-1">
              <h3 className="font-semibold text-tree-900">Want to Grow More Trees?</h3>
              <p className="text-sm text-tree-700">
                Upgrade to Premium to nurture up to 3 trees and unlock advanced features.
              </p>
            </div>
            <Link
              to="/subscription"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Upgrade
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};