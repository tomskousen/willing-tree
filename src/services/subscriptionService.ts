import { loadStripe, Stripe } from '@stripe/stripe-js';
import { User } from '../types';

// Initialize Stripe
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export interface SubscriptionPlan {
  id: 'free' | 'premium';
  name: string;
  description: string;
  price: number;
  currency: 'USD';
  interval: 'month';
  maxInnermosts: number;
  features: string[];
  stripePriceId?: string;
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for trying out your first Innermost',
    price: 0,
    currency: 'USD',
    interval: 'month',
    maxInnermosts: 1,
    features: [
      '1 Active Innermost',
      'Basic Wants & Willing Lists',
      'Weekly Guessing Game',
      'Basic Scoring System'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Full access to grow multiple relationships',
    price: 1,
    currency: 'USD',
    interval: 'month',
    maxInnermosts: 3,
    features: [
      'Up to 3 Active Innermosts',
      'Advanced Analytics & Insights',
      'Priority Support',
      'Export Data',
      'Custom Wants Categories',
      'Extended Score History'
    ],
    stripePriceId: import.meta.env.VITE_STRIPE_PREMIUM_PRICE_ID || 'price_1234567890abcdef' // Set in environment variables
  }
];

export class SubscriptionService {
  /**
   * Check if user can access premium features
   */
  static canAccessPremiumFeatures(user: User): boolean {
    return user.subscriptionStatus === 'premium' && 
           (!user.subscriptionEndDate || user.subscriptionEndDate > new Date());
  }

  /**
   * Check if user can create additional Innermosts
   */
  static canCreateInnermost(user: User, currentInnermostCount: number): boolean {
    const plan = this.getUserPlan(user);
    return currentInnermostCount < plan.maxInnermosts;
  }

  /**
   * Get user's current subscription plan
   */
  static getUserPlan(user: User): SubscriptionPlan {
    if (this.canAccessPremiumFeatures(user)) {
      return SUBSCRIPTION_PLANS.find(p => p.id === 'premium')!;
    }
    return SUBSCRIPTION_PLANS.find(p => p.id === 'free')!;
  }

  /**
   * Create Stripe checkout session for subscription
   */
  static async createCheckoutSession(
    user: User,
    planId: 'premium',
    successUrl: string,
    cancelUrl: string
  ): Promise<{ sessionId: string }> {
    const plan = SUBSCRIPTION_PLANS.find(p => p.id === planId);
    if (!plan || !plan.stripePriceId) {
      throw new Error('Invalid subscription plan');
    }

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBaseUrl}/api/create-checkout-session`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.id}` // Simple auth header
        },
        body: JSON.stringify({
          priceId: plan.stripePriceId,
          userId: user.id,
          userEmail: user.email,
          successUrl,
          cancelUrl,
          mode: 'subscription'
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create checkout session');
      }

      const { sessionId } = await response.json();
      return { sessionId };
      
    } catch (error) {
      console.error('Stripe checkout session creation failed:', error);
      throw new Error('Unable to start checkout process. Please try again.');
    }
  }

  /**
   * Redirect to Stripe checkout
   */
  static async redirectToCheckout(
    user: User,
    planId: 'premium'
  ): Promise<void> {
    try {
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const baseUrl = window.location.origin;
      const { sessionId } = await this.createCheckoutSession(
        user,
        planId,
        `${baseUrl}/subscription/success`,
        `${baseUrl}/subscription/cancel`
      );

      // Redirect to Stripe checkout
      const { error } = await stripe.redirectToCheckout({ sessionId });
      
      if (error) {
        console.error('Stripe redirect error:', error);
        throw new Error(error.message || 'Checkout redirect failed');
      }
      
    } catch (error) {
      console.error('Checkout error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to start checkout process');
    }
  }

  /**
   * Cancel subscription
   */
  static async cancelSubscription(user: User): Promise<void> {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBaseUrl}/api/cancel-subscription`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.id}`
        },
        body: JSON.stringify({ userId: user.id })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to cancel subscription');
      }

      const { message } = await response.json();
      return message;
      
    } catch (error) {
      console.error('Subscription cancellation failed:', error);
      throw new Error('Unable to cancel subscription. Please contact support.');
    }
  }

  /**
   * Get subscription status and billing info
   */
  static async getBillingInfo(user: User): Promise<{
    status: 'active' | 'canceled' | 'past_due' | 'unpaid';
    currentPeriodEnd?: Date;
    cancelAtPeriodEnd?: boolean;
  }> {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBaseUrl}/api/billing-info/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${user.id}`
        }
      });

      if (!response.ok) {
        // If API fails, fall back to user data
        return {
          status: user.subscriptionStatus === 'premium' ? 'active' : 'canceled',
          currentPeriodEnd: user.subscriptionEndDate,
          cancelAtPeriodEnd: false
        };
      }

      const billingInfo = await response.json();
      return {
        status: billingInfo.status,
        currentPeriodEnd: billingInfo.currentPeriodEnd ? new Date(billingInfo.currentPeriodEnd) : undefined,
        cancelAtPeriodEnd: billingInfo.cancelAtPeriodEnd || false
      };
      
    } catch (error) {
      console.error('Failed to fetch billing info:', error);
      // Fall back to user data on error
      return {
        status: user.subscriptionStatus === 'premium' ? 'active' : 'canceled',
        currentPeriodEnd: user.subscriptionEndDate,
        cancelAtPeriodEnd: false
      };
    }
  }

  /**
   * Format price for display
   */
  static formatPrice(plan: SubscriptionPlan): string {
    if (plan.price === 0) return 'Free';
    return `$${plan.price}/${plan.interval}`;
  }

  /**
   * Get features comparison for upgrade prompts
   */
  static getFeatureComparison(): Array<{
    feature: string;
    free: boolean | string;
    premium: boolean | string;
  }> {
    return [
      { feature: 'Active Innermosts', free: '1', premium: '3' },
      { feature: 'Wants & Willing Lists', free: true, premium: true },
      { feature: 'Weekly Scoring', free: true, premium: true },
      { feature: 'Advanced Analytics', free: false, premium: true },
      { feature: 'Data Export', free: false, premium: true },
      { feature: 'Priority Support', free: false, premium: true },
      { feature: 'Custom Categories', free: false, premium: true }
    ];
  }
}