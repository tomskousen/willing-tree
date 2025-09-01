import { Want, WillingBox, User } from '../types';

/**
 * PRIVACY ENGINE - CRITICAL FOR AUTONOMOUS PARTNER BEHAVIOR
 * 
 * Core Principle: Partners NEVER see each other's Willing lists
 * This preserves autonomy and prevents prescriptive/bossy dynamics
 */

export class PrivacyEngine {
  /**
   * WILLING TREE: Get partner's WishList (VISIBLE for selection)
   * Partner A sees Partner B's WishList to select their WillingList
   * Partner B sees Partner A's WishList to select their WillingList
   */
  static getPartnerWishList(
    willingBox: WillingBox,
    viewerUserId: string,
    innermost: { partnerA: string; partnerB: string }
  ): Want[] {
    const isPartnerA = viewerUserId === innermost.partnerA;
    
    // A sees B's WishList, B sees A's WishList
    const wishList = isPartnerA 
      ? (willingBox.partnerBWishList || willingBox.partnerBWishlist || willingBox.partnerBWants || [])
      : (willingBox.partnerAWishList || willingBox.partnerAWishlist || willingBox.partnerAWants || []);
    
    return wishList;
  }

  /**
   * Get user's own WishList (for planting trees)
   */
  static getOwnWishList(
    willingBox: WillingBox,
    userId: string,
    innermost: { partnerA: string; partnerB: string }
  ): Want[] {
    const isPartnerA = userId === innermost.partnerA;
    
    // Return own WishList
    const wishList = isPartnerA 
      ? (willingBox.partnerAWishList || willingBox.partnerAWishlist || willingBox.partnerAWants || [])
      : (willingBox.partnerBWishList || willingBox.partnerBWishlist || willingBox.partnerBWants || []);
    
    return wishList;
  }
  
  // Legacy support
  static getPartnerWishlist = PrivacyEngine.getPartnerWishList;
  static getOwnWishlist = PrivacyEngine.getOwnWishList;
  
  // Legacy support
  static getVisibleWants = PrivacyEngine.getPartnerWishlist;
  static getOwnWants = PrivacyEngine.getOwnWishlist;

  /**
   * CRITICAL: Never expose WillingLists to partners until day 7 reveal
   * This returns null for partner's WillingList - they should never see it
   */
  static getWillingList(
    willingBox: WillingBox,
    userId: string,
    innermost: { partnerA: string; partnerB: string },
    requestedUserId: string
  ): WillingItem[] | null {
    // Users can only see their OWN WillingList, never their partner's (until reveal)
    if (userId !== requestedUserId) {
      return null; // PRIVACY ENFORCED until day 7
    }

    const isPartnerA = userId === innermost.partnerA;
    return isPartnerA 
      ? (willingBox.partnerAWillingList || willingBox.partnerAWilling || [])
      : (willingBox.partnerBWillingList || willingBox.partnerBWilling || []);
  }

  /**
   * Get willing priorities (also private to each user)
   */
  static getWillingPriorities(
    willingBox: WillingBox,
    userId: string,
    innermost: { partnerA: string; partnerB: string }
  ): Record<string, number> | null {
    const isPartnerA = userId === innermost.partnerA;
    return isPartnerA ? willingBox.partnerAWillingPriority : willingBox.partnerBWillingPriority;
  }

  /**
   * Validate user has permission to view/edit an Innermost
   */
  static canAccessInnermost(
    innermost: { partnerA: string; partnerB: string },
    userId: string
  ): boolean {
    return innermost.partnerA === userId || innermost.partnerB === userId;
  }

  /**
   * Validate user can edit wants (only their own)
   */
  static canEditWants(
    willingBox: WillingBox,
    userId: string,
    innermost: { partnerA: string; partnerB: string }
  ): boolean {
    // Can only edit during collecting_wants phase and only your own wants
    return willingBox.status === 'collecting_wants' && 
           this.canAccessInnermost(innermost, userId);
  }

  /**
   * Validate user can select willing items (during selection phase)
   */
  static canSelectWilling(
    willingBox: WillingBox,
    userId: string,
    innermost: { partnerA: string; partnerB: string }
  ): boolean {
    return willingBox.status === 'selecting_willing' && 
           this.canAccessInnermost(innermost, userId);
  }

  /**
   * Get partner's name (for display purposes)
   */
  static getPartnerName(
    innermost: { partnerA: string; partnerB: string; partnerAName: string; partnerBName: string },
    userId: string
  ): string {
    const isPartnerA = userId === innermost.partnerA;
    return isPartnerA ? innermost.partnerBName : innermost.partnerAName;
  }

  /**
   * Get user's own name in context
   */
  static getOwnName(
    innermost: { partnerA: string; partnerB: string; partnerAName: string; partnerBName: string },
    userId: string
  ): string {
    const isPartnerA = userId === innermost.partnerA;
    return isPartnerA ? innermost.partnerAName : innermost.partnerBName;
  }

  /**
   * Filter data for client response (removes sensitive info)
   */
  static sanitizeWillingBoxForUser(
    willingBox: WillingBox,
    userId: string,
    innermost: { partnerA: string; partnerB: string }
  ): Partial<WillingBox> {
    const isPartnerA = userId === innermost.partnerA;

    return {
      id: willingBox.id,
      innermostId: willingBox.innermostId,
      // Show partner's wants (what they can select from)
      partnerAWants: !isPartnerA ? willingBox.partnerAWants : [],
      partnerBWants: isPartnerA ? willingBox.partnerBWants : [],
      // NEVER show partner's willing list
      partnerAWilling: isPartnerA ? willingBox.partnerAWilling : [],
      partnerBWilling: !isPartnerA ? willingBox.partnerBWilling : [],
      // NEVER show partner's priorities
      partnerAWillingPriority: isPartnerA ? willingBox.partnerAWillingPriority : {},
      partnerBWillingPriority: !isPartnerA ? willingBox.partnerBWillingPriority : {},
      currentWeek: willingBox.currentWeek,
      lockedAt: willingBox.lockedAt,
      status: willingBox.status
    };
  }

  /**
   * Check if both partners have completed their wants lists
   */
  static areBothWantsListsComplete(willingBox: WillingBox): boolean {
    return willingBox.partnerAWants.length === 20 && 
           willingBox.partnerBWants.length === 20;
  }

  /**
   * Check if both partners have completed their willing selections
   */
  static areBothWillingSelectionsComplete(willingBox: WillingBox): boolean {
    return willingBox.partnerAWilling.length === 5 && 
           willingBox.partnerBWilling.length === 5;
  }
}