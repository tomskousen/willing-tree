import { Want, WeeklyScore, WeeklyGuess } from '../types';

/**
 * CORE SCORING LOGIC - CRITICAL FOR PRIVACY & INCENTIVES
 * 
 * Privacy Rule: Partners never see each other's Willing lists
 * Scoring Rule: Guesser gets 1 pt, Performer gets 2 pts (double for Most Wanted)
 * This incentivizes PERFORMING over MONITORING - key behavioral insight
 */

export class ScoringEngine {
  /**
   * Calculate points for a weekly guess
   * @param guess The guess made by one partner
   * @param actualEffort What the other partner actually worked on
   * @param wants All wants to check for Most Wanted status
   */
  static calculateGuessPoints(
    guess: WeeklyGuess,
    actualEffort: string | null,
    wants: Want[]
  ): { guesserPoints: number; performerPoints: number } {
    // No guess made
    if (!guess.guessedWantId && !actualEffort) {
      return { guesserPoints: 0, performerPoints: 0 };
    }

    // Correct guess
    const isCorrect = guess.guessedWantId === actualEffort;
    if (!isCorrect) {
      return { guesserPoints: 0, performerPoints: 0 };
    }

    // Find if the want is "Most Wanted" (worth double points)
    const want = wants.find(w => w.id === actualEffort);
    const isMostWanted = want?.isMostWanted || false;
    const multiplier = isMostWanted ? 2 : 1;

    return {
      guesserPoints: 1 * multiplier,     // 1 pt (2 if Most Wanted)
      performerPoints: 2 * multiplier    // 2 pts (4 if Most Wanted)
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
   * Validate that exactly 2 wants are marked as Most Wanted
   */
  static validateMostWanted(wants: Want[]): boolean {
    const mostWantedCount = wants.filter(w => w.isMostWanted).length;
    return mostWantedCount === 2;
  }

  /**
   * Validate that willing list has exactly 5 items with priorities 1-5
   */
  static validateWillingList(
    willingIds: string[], 
    priorities: Record<string, number>
  ): boolean {
    if (willingIds.length !== 5) return false;
    
    const priorityValues = Object.values(priorities).sort();
    const expectedPriorities = [1, 2, 3, 4, 5];
    
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