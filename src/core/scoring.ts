import type { Want, WeeklyScore, WeeklyGuess } from '../types/index';

/**
 * CORE SCORING LOGIC - CRITICAL FOR PRIVACY & INCENTIVES
 * 
 * Privacy Rule: Partners never see each other's Willing lists
 * Scoring Rule: Guesser gets 1 pt, Performer gets 2 pts (double for Most Wanted)
 * This incentivizes PERFORMING over MONITORING - key behavioral insight
 */

export class ScoringEngine {
  /**
   * Calculate points for a weekly guess - WILLING TREE SCORING
   * @param guess The guess made by one partner
   * @param actualWillingItem The WillingItem the partner selected
   * @param wishList The WishList to check for Most Wanted status
   */
  static calculateGuessPoints(
    guess: WeeklyGuess,
    actualWillingItem: WillingItem | null,
    wishList: Want[]
  ): { guesserPoints: number; performerPoints: number } {
    // No guess made or no willing item
    if (!guess.guessedWantId || !actualWillingItem) {
      return { guesserPoints: 0, performerPoints: 0 };
    }

    // Check if guess is correct
    const isCorrect = guess.guessedWantId === actualWillingItem.wishId;
    if (!isCorrect) {
      return { guesserPoints: 0, performerPoints: 0 };
    }

    // Find the wish to check if it's Most Wanted
    const wish = wishList.find(w => w.id === actualWillingItem.wishId);
    const isMostWanted = wish?.isMostWanted || false;
    const isTopPriority = actualWillingItem.priority === 1;

    // Calculate multipliers
    let guesserMultiplier = 1;
    let performerMultiplier = 1;

    // TRIPLE points if Most Wanted
    if (isMostWanted) {
      guesserMultiplier = 3;
      performerMultiplier = 3;
    }

    // DOUBLE points if top priority
    if (isTopPriority) {
      performerMultiplier *= 2;  // Stack with Most Wanted if applicable
    }

    return {
      guesserPoints: 1 * guesserMultiplier,       // Base 1 pt (3 if Most Wanted)
      performerPoints: 2 * performerMultiplier    // Base 2 pts (x3 if Most Wanted, x2 if top priority)
    };
  }

  /**
   * Calculate total weekly score for both partners
   */
  static calculateWeeklyScore(
    partnerAGuess: WeeklyGuess | null,
    partnerBGuess: WeeklyGuess | null,
    partnerAActualEffort: string | null,
    partnerBActualEffort: string | null,
    partnerAWants: Want[],
    partnerBWants: Want[]
  ): Omit<WeeklyScore, 'id' | 'innermostId' | 'weekNumber' | 'completedAt'> {
    // Partner A guesses what Partner B did
    const aGuessPoints = partnerAGuess ? 
      this.calculateGuessPoints(partnerAGuess, partnerBActualEffort, partnerBWants) :
      { guesserPoints: 0, performerPoints: 0 };

    // Partner B guesses what Partner A did  
    const bGuessPoints = partnerBGuess ?
      this.calculateGuessPoints(partnerBGuess, partnerAActualEffort, partnerAWants) :
      { guesserPoints: 0, performerPoints: 0 };

    return {
      partnerAGuess: partnerAGuess?.guessedWantId || null,
      partnerBGuess: partnerBGuess?.guessedWantId || null,
      partnerAActualEffort,
      partnerBActualEffort,
      // A's points: guessing B + being guessed by B
      partnerAGuessingPoints: aGuessPoints.guesserPoints,
      partnerAPerformingPoints: bGuessPoints.performerPoints,
      partnerAScore: aGuessPoints.guesserPoints + bGuessPoints.performerPoints,
      // B's points: guessing A + being guessed by A
      partnerBGuessingPoints: bGuessPoints.guesserPoints,
      partnerBPerformingPoints: aGuessPoints.performerPoints,
      partnerBScore: bGuessPoints.guesserPoints + aGuessPoints.performerPoints
    };
  }

  /**
   * Validate WishList has exactly 12 items with 1 marked as Most Wanted
   */
  static validateWishList(wishes: Want[]): boolean {
    if (wishes.length !== 12) return false;
    const mostWantedCount = wishes.filter(w => w.isMostWanted).length;
    return mostWantedCount === 1;  // Only 1 Most Wanted per WishList
  }
  
  // Legacy support
  static validateWishlist = ScoringEngine.validateWishList;
  static validateMostWanted = ScoringEngine.validateWishList;

  /**
   * Validate that WillingList has exactly 3 items with priorities 1-3
   */
  static validateWillingList(
    willingIds: string[], 
    priorities: Record<string, number>
  ): boolean {
    if (willingIds.length !== 3) return false;  // Exactly 3 items
    
    const priorityValues = Object.values(priorities).sort();
    const expectedPriorities = [1, 2, 3];  // Ranked 1-3
    
    return JSON.stringify(priorityValues) === JSON.stringify(expectedPriorities);
  }

  /**
   * Calculate cumulative scores across all weeks
   */
  static calculateCumulativeScore(weeklyScores: WeeklyScore[]): {
    partnerATotal: number;
    partnerBTotal: number;
    breakdown: {
      partnerAGuessing: number;
      partnerAPerforming: number;
      partnerBGuessing: number;
      partnerBPerforming: number;
    };
  } {
    const totals = weeklyScores.reduce(
      (acc, score) => ({
        partnerAGuessing: acc.partnerAGuessing + score.partnerAGuessingPoints,
        partnerAPerforming: acc.partnerAPerforming + score.partnerAPerformingPoints,
        partnerBGuessing: acc.partnerBGuessing + score.partnerBGuessingPoints,
        partnerBPerforming: acc.partnerBPerforming + score.partnerBPerformingPoints,
      }),
      { partnerAGuessing: 0, partnerAPerforming: 0, partnerBGuessing: 0, partnerBPerforming: 0 }
    );

    return {
      partnerATotal: totals.partnerAGuessing + totals.partnerAPerforming,
      partnerBTotal: totals.partnerBGuessing + totals.partnerBPerforming,
      breakdown: totals
    };
  }
}