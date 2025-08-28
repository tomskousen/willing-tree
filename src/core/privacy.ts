import { Want, WillingBox, User } from '../types';

/**
 * PRIVACY ENGINE - CRITICAL FOR AUTONOMOUS PARTNER BEHAVIOR
 * 
 * Core Principle: Partners NEVER see each other's Willing lists
 * This preserves autonomy and prevents prescriptive/bossy dynamics
 */

export class PrivacyEngine {
  /**
   * Filter wants that a user can see (only their partner's wants for selection)
   */
  static getVisibleWants(
    willingBox: WillingBox,
    viewerUserId: string,
    innermost: { partnerA: string; partnerB: string }
  ): Want[] {
    const isPartnerA = viewerUserId === innermost.partnerA;
    
    // Partner A sees Partner B's wants for selection
    // Partner B sees Partner A's wants for selection
    return isPartnerA ? willingBox.partnerBWants : willingBox.partnerAWants;
  }

  /**
   * Get user's own wants (for editing/viewing)
   */
  static getOwnWants(
    willingBox: WillingBox,
    userId: string,
    innermost: { partnerA: string; partnerB: string }
  ): Want[] {
    const isPartnerA = userId === innermost.partnerA;
    return isPartnerA ? willingBox.partnerAWants : willingBox.partnerBWants;
  }

  /**
   * CRITICAL: Never expose willing lists to partners
   * This returns null for partner's willing list - they should never see it
   */
  static getWillingList(
    willingBox: WillingBox,
    userId: string,
    innermost: { partnerA: string; partnerB: string },
    requestedUserId: string
  ): string[] | null {
    // Users can only see their OWN willing list, never their partner's
    if (userId !== requestedUserId) {
      return null; // PRIVACY ENFORCED
    }

    const isPartnerA = userId === innermost.partnerA;
    return isPartnerA ? willingBox.partnerAWilling : willingBox.partnerBWilling;
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