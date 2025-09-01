// Core User Types
export interface User {
  id: string;
  email: string;
  displayName: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  activeInnermosts: string[];
  createdAt: Date;
  subscriptionStatus: 'free' | 'premium' | 'expired';
  subscriptionEndDate?: Date;
}

// Pairing & Innermost Types
export interface Innermost {
  id: string;
  partnerA: string;
  partnerB: string;
  partnerAEmail: string;
  partnerBEmail: string;
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

// Wishes and Willing Lists - NEW GAME LOGIC
export interface Wish {
  id: string;
  text: string;
  category: 'communication' | 'affection' | 'household' | 'time' | 'personal';
  isMostWanted: boolean;  // Max 2 per list
  order: number;  // 1-12
  createdBy: string;
}

// Backward compatibility alias
export type Want = Wish;

export interface WillingBox {
  id: string;
  innermostId: string;
  partnerA: string;
  partnerB: string;
  
  // NEW: Separate wishlists for each partner (12 items each)
  // These ARE visible to the other partner
  partnerAWishlist: Wish[];  // What A wishes B would do
  partnerBWishlist: Wish[];  // What B wishes A would do
  
  // UNCHANGED: Willing selections remain private
  // A selects from B's wishlist, B selects from A's wishlist
  partnerAWilling: WillingItem[];  // A's selections from B's wishlist
  partnerBWilling: WillingItem[];  // B's selections from A's wishlist
  
  weekNumber: number;
  status: 'creating_wishes' | 'selecting_willing' | 'guessing' | 'revealed';
  lockedAt?: Date;
  isLocked: boolean;
  
  // Legacy support
  wants?: Wish[];
}

export interface WillingItem {
  wishId: string;  // References partner's wish
  priority: number;  // 1-5 (most to least willing)
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