/**
 * Migration utilities for transitioning from old to new game logic
 */

import { WillingBox, Wish, WillingItem } from '../types';

export class MigrationHelper {
  /**
   * Check if a WillingBox is using the new format
   */
  static isNewFormat(box: WillingBox): boolean {
    return !!(box.partnerAWishlist && box.partnerBWishlist);
  }

  /**
   * Migrate old format to new format
   */
  static migrateWillingBox(box: any): WillingBox {
    // If already new format, return as-is
    if (this.isNewFormat(box)) {
      return box;
    }

    // Convert old format
    const migrated: WillingBox = {
      ...box,
      // Split the old 'wants' array into two wishlists
      partnerAWishlist: box.partnerAWants || box.wants?.slice(0, 12) || [],
      partnerBWishlist: box.partnerBWants || box.wants?.slice(12, 24) || [],
      
      // Update willing items to use new structure
      partnerAWilling: this.migrateWillingItems(box.partnerAWilling || []),
      partnerBWilling: this.migrateWillingItems(box.partnerBWilling || []),
      
      // Add new fields
      weekNumber: box.weekNumber || 1,
      status: box.status || 'creating_wishes'
    };

    return migrated;
  }

  /**
   * Migrate old willing items to new format
   */
  static migrateWillingItems(items: any[]): WillingItem[] {
    return items.map((item, index) => ({
      wishId: item.wishId || item.wantId || '',
      priority: item.priority || (index + 1),
      effortLevel: item.effortLevel || 'moderate',
      // Keep legacy fields for backward compatibility
      wantId: item.wantId,
      effort: item.effort
    }));
  }

  /**
   * Get the appropriate wishlist for a user
   */
  static getUserWishlist(box: WillingBox, userId: string, innermost: any): Wish[] {
    const isPartnerA = userId === innermost.partnerA;
    
    if (this.isNewFormat(box)) {
      return isPartnerA ? box.partnerAWishlist : box.partnerBWishlist;
    }
    
    // Fallback for old format
    return box.wants || [];
  }

  /**
   * Get partner's wishlist (what user selects from)
   */
  static getPartnerWishlist(box: WillingBox, userId: string, innermost: any): Wish[] {
    const isPartnerA = userId === innermost.partnerA;
    
    if (this.isNewFormat(box)) {
      // A selects from B's wishlist, B selects from A's wishlist
      return isPartnerA ? box.partnerBWishlist : box.partnerAWishlist;
    }
    
    // Fallback for old format
    return box.wants || [];
  }
}