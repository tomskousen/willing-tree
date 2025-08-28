import { User, Innermost, Want, WillingBox } from '../types';

/**
 * CORE BUSINESS RULES VALIDATION
 * These rules enforce the fundamental game mechanics
 */

export class ValidationEngine {
  /**
   * Validate user can create a new Innermost (max 3)
   */
  static canCreateInnermost(user: User): boolean {
    return user.activeInnermosts.length < 3;
  }

  /**
   * Validate subscription allows multiple Innermosts
   */
  static canCreateMultipleInnermosts(user: User): boolean {
    return user.subscriptionStatus === 'premium';
  }

  /**
   * Validate wants list is complete (exactly 20 items, 2 Most Wanted)
   */
  static validateWantsList(wants: Want[]): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    // Must have exactly 20 wants
    if (wants.length !== 20) {
      errors.push(`Must have exactly 20 wants, found ${wants.length}`);
    }

    // Must have exactly 2 Most Wanted
    const mostWantedCount = wants.filter(w => w.isMostWanted).length;
    if (mostWantedCount !== 2) {
      errors.push(`Must mark exactly 2 as Most Wanted, found ${mostWantedCount}`);
    }

    // All wants must have text
    const emptyWants = wants.filter(w => !w.text.trim());
    if (emptyWants.length > 0) {
      errors.push(`${emptyWants.length} wants are empty`);
    }

    // Text length validation
    const longWants = wants.filter(w => w.text.length > 200);
    if (longWants.length > 0) {
      errors.push(`${longWants.length} wants exceed 200 character limit`);
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Validate willing list selection (exactly 5 items, priorities 1-5)
   */
  static validateWillingSelection(
    selectedWantIds: string[],
    availableWants: Want[],
    priorities: Record<string, number>
  ): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    // Must select exactly 5 items
    if (selectedWantIds.length !== 5) {
      errors.push(`Must select exactly 5 items, found ${selectedWantIds.length}`);
    }

    // All selected IDs must exist in available wants
    const availableWantIds = availableWants.map(w => w.id);
    const invalidIds = selectedWantIds.filter(id => !availableWantIds.includes(id));
    if (invalidIds.length > 0) {
      errors.push(`Invalid want IDs: ${invalidIds.join(', ')}`);
    }

    // Must have priorities 1-5 for all selected items
    const priorityValues = Object.values(priorities).sort();
    const expectedPriorities = [1, 2, 3, 4, 5];
    if (JSON.stringify(priorityValues) !== JSON.stringify(expectedPriorities)) {
      errors.push('Must assign priorities 1-5 to all selected items');
    }

    // Priorities must match selected IDs
    const priorityIds = Object.keys(priorities);
    const missingPriorities = selectedWantIds.filter(id => !priorityIds.includes(id));
    if (missingPriorities.length > 0) {
      errors.push(`Missing priorities for: ${missingPriorities.join(', ')}`);
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Validate Innermost state transitions
   */
  static canTransitionInnermostState(
    currentState: Innermost['status'],
    newState: Innermost['status']
  ): boolean {
    const validTransitions: Record<Innermost['status'], Innermost['status'][]> = {
      pending: ['active', 'ended'],
      active: ['ended'],
      ended: [] // No transitions from ended
    };

    return validTransitions[currentState]?.includes(newState) || false;
  }

  /**
   * Validate WillingBox state transitions
   */
  static canTransitionWillingBoxState(
    currentState: WillingBox['status'],
    newState: WillingBox['status']
  ): boolean {
    const validTransitions: Record<WillingBox['status'], WillingBox['status'][]> = {
      collecting_wants: ['selecting_willing'],
      selecting_willing: ['active'],
      active: ['completed'],
      completed: [] // No transitions from completed
    };

    return validTransitions[currentState]?.includes(newState) || false;
  }

  /**
   * Validate user can make a guess this week
   */
  static canMakeWeeklyGuess(
    userId: string,
    innermostId: string,
    weekNumber: number,
    existingGuesses: Array<{ userId: string; innermostId: string; weekNumber: number }>
  ): boolean {
    // Check if user already made a guess for this week
    return !existingGuesses.some(
      guess => 
        guess.userId === userId &&
        guess.innermostId === innermostId &&
        guess.weekNumber === weekNumber
    );
  }

  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate display name
   */
  static isValidDisplayName(name: string): boolean {
    return name.trim().length >= 2 && name.trim().length <= 50;
  }

  /**
   * Validate age
   */
  static isValidAge(age: number): boolean {
    return age >= 18 && age <= 120;
  }
}