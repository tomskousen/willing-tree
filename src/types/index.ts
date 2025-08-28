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

// Wants/Needs and Willing Lists
export interface Want {
  id: string;
  text: string;
  category: 'communication' | 'affection' | 'household' | 'time' | 'personal';
  isMostWanted: boolean;
  order: number;
  createdBy: string;
}

export interface WillingBox {
  id: string;
  innermostId: string;
  partnerA: string;
  partnerB: string;
  wants: Want[];
  // Privacy: Willing lists are NEVER shared between partners
  partnerAWilling: WillingItem[];
  partnerBWilling: WillingItem[];
  lockedAt?: Date;
  isLocked: boolean;
}

export interface WillingItem {
  wantId: string;
  effort: string;
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