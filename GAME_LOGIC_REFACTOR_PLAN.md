# Willing Tree Game Logic Refactor Plan

## Executive Summary
We're fundamentally changing how the game works to create a more intuitive relationship dynamic where partners express wishes and secretly commit to fulfilling them.

---

## 🎯 NEW GAME LOGIC

### Core Concept: "I Wish, You're Willing"
1. **Partner A creates a WISHLIST** (12 items) - "I wish you would..."
2. **Partner B SEES Partner A's wishlist** 
3. **Partner B secretly selects** which items they're WILLING to do
4. **Partner A guesses** which wishes Partner B was willing to fulfill
5. **Scoring rewards** both guessing correctly AND being willing

### Key Changes from Current System
| Current (WRONG) | New (CORRECT) |
|-----------------|---------------|
| 20 wishes each | 12 wishes each |
| Pick 5 from own wishes | Pick from PARTNER'S wishes |
| Can't see partner's wishes | CAN see partner's wishes |
| Can't see partner's willing | Still can't see partner's willing |

---

## 🏗️ ARCHITECTURE CHANGES

### 1. Database Schema Updates

#### WillingBox Structure
```typescript
interface WillingBox {
  id: string;
  innermostId: string;
  
  // WISHES - Visible to partner
  partnerAWishlist: Wish[];  // 12 items Partner A wishes B would do
  partnerBWishlist: Wish[];  // 12 items Partner B wishes A would do
  
  // WILLING - Never visible to partner
  partnerAWilling: WillingSelection[];  // A's selections from B's wishlist
  partnerBWilling: WillingSelection[];  // B's selections from A's wishlist
  
  weekNumber: number;
  status: 'creating_wishes' | 'selecting_willing' | 'guessing' | 'revealed';
  lockedAt?: Date;
}

interface Wish {
  id: string;
  text: string;
  category: 'communication' | 'affection' | 'household' | 'time' | 'personal';
  isMostWanted: boolean;  // Max 2 per list
  order: number;  // 1-12
  suggestedByAI?: boolean;
  ageGroup?: string;
  genderPreference?: string;
}

interface WillingSelection {
  wishId: string;  // References partner's wish
  priority: number; // 1-5 (most to least willing)
  effortLevel: 'easy' | 'moderate' | 'challenging';
}
```

### 2. Privacy Rules Update

#### PrivacyEngine Changes
```typescript
class PrivacyEngine {
  // NEW: Partners CAN see each other's wishlists
  static getPartnerWishlist(willingBox, viewerId, innermost) {
    const isPartnerA = viewerId === innermost.partnerA;
    // A sees B's wishlist, B sees A's wishlist
    return isPartnerA ? willingBox.partnerBWishlist : willingBox.partnerAWishlist;
  }
  
  // UNCHANGED: Partners CANNOT see each other's willing selections
  static getWillingList(willingBox, viewerId, requestedUserId) {
    if (viewerId !== requestedUserId) return null; // PRIVACY!
    // Only return own willing list
  }
  
  // NEW: Get wishes for willing selection
  static getWishesForWillingSelection(willingBox, selecterId, innermost) {
    const isPartnerA = selecterId === innermost.partnerA;
    // A selects from B's wishes, B selects from A's wishes
    return isPartnerA ? willingBox.partnerBWishlist : willingBox.partnerAWishlist;
  }
}
```

### 3. Game Flow States

```
[START] 
   ↓
[CREATE_WISHLISTS] - Both partners create 12 wishes
   ↓
[REVIEW_PARTNER_WISHES] - See what partner wishes for
   ↓
[SELECT_WILLING] - Secretly select 5 items you're willing to do
   ↓
[WEEKLY_CYCLE] - Throughout the week, work on willing items
   ↓
[GUESS_PARTNER] - Guess which wishes partner was willing to fulfill
   ↓
[REVEAL_SCORES] - Show results and points
   ↓
[NEXT_WEEK] → Back to SELECT_WILLING with same wishlists
```

### 4. Scoring System Updates

```typescript
class ScoringEngine {
  static calculatePoints(guess, actualWilling, wishlist) {
    // Guess correctly = 1 point (2 if Most Wanted)
    // Being willing = 2 points (4 if Most Wanted)
    // This incentivizes DOING over MONITORING
  }
}
```

---

## 🎨 UI/UX CHANGES

### Screen Flow

1. **Wishlist Creation** (New Design)
   - Header: "Create Your Wishlist for [Partner Name]"
   - Subtitle: "What do you wish they would do more often?"
   - 12 input fields with categories
   - AI suggestions based on age/gender
   - Mark 2 as "Most Wanted" (double points)

2. **Partner Wishlist Review** (New Screen)
   - Header: "[Partner Name]'s Wishes"
   - Display all 12 wishes with categories
   - Highlight "Most Wanted" items
   - Button: "I'm Ready to Choose What I'm Willing to Do"

3. **Willing Selection** (Modified)
   - Header: "Select What You're Willing to Do"
   - Show partner's 12 wishes
   - Select 5 items
   - Rank them 1-5 by priority
   - This selection is SECRET

4. **Weekly Guessing** (Modified)
   - Header: "Guess What [Partner] Was Willing to Do"
   - Show YOUR OWN wishlist
   - Select which ones you think they chose
   - Compare with their actual willing list for scoring

---

## 📝 IMPLEMENTATION STEPS

### Phase 1: Database Schema
1. Update Firestore types
2. Create migration for existing data
3. Update security rules

### Phase 2: Core Logic
1. Refactor PrivacyEngine
2. Update ScoringEngine
3. Modify game state machine

### Phase 3: UI Components
1. Create WishlistCreation component
2. Add PartnerWishlistView component
3. Update WillingSelection component
4. Modify WeeklyGuessing component

### Phase 4: Testing
1. Test privacy rules
2. Verify scoring calculations
3. End-to-end flow testing

---

## 🔄 MIGRATION STRATEGY

For existing users:
1. Keep current game data as "legacy"
2. Prompt to start fresh with new rules
3. Explain the improved dynamics

---

## 💡 KEY INSIGHTS

### Why This Works Better

1. **Natural Relationship Dynamic**
   - "I wish you would..." is how people naturally express needs
   - Selecting from partner's wishes = responding to their needs
   - More intuitive than current system

2. **Maintains Privacy Where It Matters**
   - Partners express wishes openly (healthy communication)
   - But willing choices remain private (preserves autonomy)
   - No pressure or monitoring

3. **Better Incentive Structure**
   - Rewards responding to partner's wishes
   - Encourages paying attention to what partner wants
   - Still rewards action over monitoring

4. **Age/Gender Customization**
   - 12 wishes allow for more personalization
   - AI suggestions make it easier to start
   - Research-backed prompts for different demographics

---

## ⚠️ CRITICAL CONSIDERATIONS

1. **Data Privacy**: Willing selections must NEVER be visible to partner
2. **Scoring Balance**: Maintain 2:1 performer:guesser ratio
3. **UI Clarity**: Make it crystal clear what's visible vs. private
4. **Prompt Quality**: AI suggestions must be appropriate and helpful

---

## 🎯 SUCCESS METRICS

- Users understand the new flow within 2 minutes
- 80% completion rate for wishlist creation
- Increased engagement due to clearer dynamics
- Positive feedback on relationship impact

---

## NEXT STEPS

1. **Review this plan** for accuracy and completeness
2. **Approve approach** before implementation
3. **Prioritize phases** based on user impact
4. **Begin Phase 1** with database schema updates