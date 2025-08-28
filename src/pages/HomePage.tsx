import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useInnermostStore } from '../stores/innermostStore';
import { Button } from '../components/Button';
import { Heart, Plus, Users, Trophy } from 'lucide-react';

export const HomePage: FC = () => {
  const { user } = useAuthStore();
  const { innermosts, canAddInnermost } = useInnermostStore();

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Header */}
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
          <Heart className="w-10 h-10 text-primary-600 fill-current" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.displayName}!
        </h1>
        <p className="text-gray-600">
          Ready to grow your relationships?
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
          <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{innermosts.length}</div>
          <div className="text-sm text-gray-500">Active Innermosts</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
          <Trophy className="w-6 h-6 text-willing-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">0</div>
          <div className="text-sm text-gray-500">Total Score</div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="space-y-4">
        {innermosts.length === 0 ? (
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-lg font-semibold mb-2">Start Your First Innermost</h3>
            <p className="text-primary-100 mb-4 text-sm">
              Connect with a partner and begin your journey of intentional relationship growth.
            </p>
            <Link to="/innermosts">
              <Button variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
                <Plus className="w-4 h-4 mr-2" />
                Create Innermost
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Your Innermosts</h2>
              {canAddInnermost() && (
                <Link to="/innermosts">
                  <Button size="sm" variant="ghost">
                    <Plus className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
            
            {/* Innermost Cards */}
            {innermosts.slice(0, 3).map((innermost) => {
              const partnerEmail = user?.id === innermost.partnerA ? innermost.partnerBEmail : innermost.partnerAEmail;
              
              return (
                <div key={innermost.id} className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">
                      {partnerEmail || 'Partner'}
                    </div>
                    <div className={`text-sm px-2 py-1 rounded-full ${
                      innermost.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {innermost.status.charAt(0).toUpperCase() + innermost.status.slice(1)}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    Created {innermost.createdAt.toLocaleDateString()}
                  </div>
                  <Link to={`/innermosts/${innermost.id}`}>
                    <Button size="sm" fullWidth>
                      {innermost.status === 'active' ? 'Enter Innermost' : 'Continue Setup'}
                    </Button>
                  </Link>
                </div>
              );
            })}
            
            {innermosts.length > 3 && (
              <Link to="/innermosts">
                <Button variant="ghost" fullWidth>
                  View All Innermosts ({innermosts.length})
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link to="/innermosts">
          <Button variant="ghost" fullWidth className="h-16 flex-col">
            <Users className="w-6 h-6 mb-1" />
            <span className="text-xs">Innermosts</span>
          </Button>
        </Link>
        <Link to="/profile">
          <Button variant="ghost" fullWidth className="h-16 flex-col">
            <Trophy className="w-6 h-6 mb-1" />
            <span className="text-xs">Profile</span>
          </Button>
        </Link>
      </div>

      {/* Bottom spacing for safe area */}
      <div className="h-4 safe-area-bottom" />
    </div>
  );
};