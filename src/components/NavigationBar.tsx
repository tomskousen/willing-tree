import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, MoreHorizontal } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { useInnermostStore } from '../stores/innermostStore';
import { Button } from './Button';

interface NavigationBarProps {
  title?: string;
  showBack?: boolean;
  showPartnerNames?: boolean;
  rightActions?: React.ReactNode;
}

export const NavigationBar: FC<NavigationBarProps> = ({
  title,
  showBack = false,
  showPartnerNames = true,
  rightActions
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthStore();
  const { activeInnermost } = useInnermostStore();

  const handleBack = () => {
    navigate(-1);
  };

  const getDisplayTitle = () => {
    if (title) return title;
    
    if (showPartnerNames && activeInnermost && user) {
      // Show both partner names prominently
      const isPartnerA = user.id === activeInnermost.partnerA;
      const partnerName = isPartnerA ? activeInnermost.partnerBName : activeInnermost.partnerAName;
      const userName = isPartnerA ? activeInnermost.partnerAName : activeInnermost.partnerBName;
      
      return `${userName} & ${partnerName}`;
    }
    
    // Default app name
    return 'Willing Box';
  };

  const getSubtitle = () => {
    if (!activeInnermost || !showPartnerNames) return null;
    
    return `Week ${activeInnermost.currentWeek} • Innermost`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {/* Left side */}
        <div className="flex items-center">
          {showBack && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="mr-2 p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
        </div>

        {/* Center - Title and Partner Names */}
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold text-gray-900 truncate">
            {getDisplayTitle()}
          </h1>
          {getSubtitle() && (
            <p className="text-sm text-gray-500 truncate">
              {getSubtitle()}
            </p>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-2">
          {rightActions || (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/settings')}
              className="p-2"
            >
              <Settings className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Partner Status Indicator (if active Innermost) */}
      {activeInnermost && showPartnerNames && (
        <div className="max-w-md mx-auto mt-2">
          <div className="flex justify-between text-xs text-gray-600">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              You
            </span>
            <span className="text-gray-400">
              Score: {/* Would show current score */} 0
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              Partner
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};