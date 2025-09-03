// Core User Types
export interface User {
  id: string;
  email: string;
  displayName: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  activeInnermosts: string[];
  createdAt: Date | any; // Support Firestore timestamps
  subscriptionStatus: 'free' | 'premium' | 'expired';
  subscriptionEndDate?: Date;
  lastLogin?: Date | any;
  emailVerified?: boolean;
  twoFactorEnabled?: boolean;
}

// Pairing & Innermost Types
export interface Innermost {
  id: string;
  partnerA: string;
  partnerB: string;
  partnerAName: string;
  partnerBName: string;
  partnerAEmail: string;
  partnerBEmail: string;
  currentWeek: number;
  status: 'pending' | 'active' | 'paused';
  pairingCode?: string;
  inviteMessage?: string;
  createdAt: Date;
}

export interface PairingInvitation {
  id: string;
  fromUserId: string;
  fromUserName: string;
  toUserId?: string;
  toEmail?: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  createdAt: Date;
  expiresAt: Date;
}

// WishLists and WillingLists - WILLING TREE GAME LOGIC
// We Plant Trees, not seeds!
export interface Wish {
  id: string;
  text: string;
  category: 'communication' | 'affection' | 'household' | 'time' | 'personal';
  isMostWanted: boolean;  // Only 1 per WishList - worth TRIPLE points
  order: number;  // 1-12
  createdBy: string;
}

// Backward compatibility alias
export type Want = Wish;

export interface WillingBox {
  id: string;
  innermostId: string;  // The partnership between two people
  partnerA: string;
  partnerB: string;
  
  // WishLists - 12 items each
  // Partner A sees Partner B's WishList and vice versa
  partnerAWishList: Wish[];  // What A wishes B would do
  partnerBWishList: Wish[];  // What B wishes A would do
  
  // WillingLists - PRIVATE until day 7 reveal
  // A selects 3 items from B's WishList, B selects 3 from A's WishList
  partnerAWillingList: WillingItem[];  // A's 3 selections from B's WishList
  partnerBWillingList: WillingItem[];  // B's 3 selections from A's WishList
  
  weekNumber: number;
  status: 'planting_trees' | 'selecting_willing' | 'guessing' | 'revealed';
  lockedAt?: Date | any;
  isLocked: boolean;
  createdAt?: Date | any;
  
  // Legacy support
  partnerAWishlist?: Wish[];
  partnerBWishlist?: Wish[];
  partnerAWilling?: WillingItem[];
  partnerBWilling?: WillingItem[];
  wants?: Wish[];
}

export interface WillingItem {
  wishId: string;  // References partner's Wish
  priority: number;  // 1-3 (ranked by importance)
  // Top priority (1) is worth DOUBLE points if guessed
  effortLevel?: 'easy' | 'moderate' | 'challenging';
  
  // Legacy support
  wantId?: string;
  effort?: string;
}

// Scoring System

export interface WeeklyScore {
  id: string;
  innermostId: string;
  weekNumber: number;
  partnerA: string;
  partnerB: string;
  partnerAGuesses: WeeklyGuess[];
  partnerBGuesses: WeeklyGuess[];
  partnerAScore: number;
  partnerBScore: number;
  isComplete: boolean;
  completedAt?: Date;
}

export interface WeeklyGuess {
  wantId: string;
  effort: string;
}

// App State Types
export interface AppState {
  user: User | null;
  activeInnermost: Innermost | null;
  isLoading: boolean;
  error: string | null;
}

// Subscription Types
export interface SubscriptionPlan {
  id: 'free' | 'premium';
  name: string;
  price: number;
  currency: 'USD';
  maxInnermosts: number;
  features: string[];
}

// Navigation Types
export interface RouteParams {
  innermostId?: string;
  willingBoxId?: string;
}

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Form Types
export interface CreateWantsFormData {
  wants: Array<{
    text: string;
    category: Want['category'];
    isMostWanted: boolean;
  }>;
}

export interface SelectWillingFormData {
  willingWantIds: string[];
  priorities: Record<string, number>;
}

export interface WeeklyGuessFormData {
  guessedWantId: string | null;
}