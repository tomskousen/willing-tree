import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Innermost, PairingInvitation, WillingBox, WeeklyScore } from '../types';

interface InnermostState {
  // Data
  innermosts: Innermost[];
  activeInnermost: Innermost | null;
  pendingInvitations: PairingInvitation[];
  willingBoxes: Record<string, WillingBox>; // keyed by innermostId
  weeklyScores: Record<string, WeeklyScore[]>; // keyed by innermostId
  
  // UI State
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setInnermosts: (innermosts: Innermost[]) => void;
  setActiveInnermost: (innermost: Innermost | null) => void;
  setPendingInvitations: (invitations: PairingInvitation[]) => void;
  setWillingBox: (innermostId: string, willingBox: WillingBox) => void;
  setWeeklyScores: (innermostId: string, scores: WeeklyScore[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Business logic
  addInnermost: (innermost: Innermost) => void;
  removeInnermost: (id: string) => void;
  updateInnermost: (id: string, updates: Partial<Innermost>) => void;
  canAddInnermost: () => boolean;
  
  // Invitation management
  addInvitation: (invitation: PairingInvitation) => void;
  updateInvitation: (id: string, updates: Partial<PairingInvitation>) => void;
  removeInvitation: (id: string) => void;
  
  // Helper methods
  getWillingBox: (innermostId: string) => WillingBox | null;
  getWeeklyScores: (innermostId: string) => WeeklyScore[];
  getCurrentWeek: (innermostId: string) => number;
}

export const useInnermostStore = create<InnermostState>()(
  devtools(
    (set, get) => ({
      // Initial state
      innermosts: [],
      activeInnermost: null,
      pendingInvitations: [],
      willingBoxes: {},
      weeklyScores: {},
      isLoading: false,
      error: null,

      // Setters
      setInnermosts: (innermosts) => set({ innermosts }),
      setActiveInnermost: (innermost) => set({ activeInnermost: innermost }),
      setPendingInvitations: (invitations) => set({ pendingInvitations: invitations }),
      setWillingBox: (innermostId, willingBox) => 
        set((state) => ({
          willingBoxes: { ...state.willingBoxes, [innermostId]: willingBox }
        })),
      setWeeklyScores: (innermostId, scores) =>
        set((state) => ({
          weeklyScores: { ...state.weeklyScores, [innermostId]: scores }
        })),
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      // Innermost management
      addInnermost: (innermost) =>
        set((state) => ({
          innermosts: [...state.innermosts, innermost]
        })),
      
      removeInnermost: (id) =>
        set((state) => ({
          innermosts: state.innermosts.filter(i => i.id !== id),
          activeInnermost: state.activeInnermost?.id === id ? null : state.activeInnermost
        })),
      
      updateInnermost: (id, updates) =>
        set((state) => ({
          innermosts: state.innermosts.map(i => 
            i.id === id ? { ...i, ...updates } : i
          ),
          activeInnermost: state.activeInnermost?.id === id 
            ? { ...state.activeInnermost, ...updates }
            : state.activeInnermost
        })),

      canAddInnermost: () => {
        const { innermosts } = get();
        return innermosts.length < 3; // Max 3 Innermosts per user
      },

      // Invitation management
      addInvitation: (invitation) =>
        set((state) => ({
          pendingInvitations: [...state.pendingInvitations, invitation]
        })),
      
      updateInvitation: (id, updates) =>
        set((state) => ({
          pendingInvitations: state.pendingInvitations.map(inv =>
            inv.id === id ? { ...inv, ...updates } : inv
          )
        })),
      
      removeInvitation: (id) =>
        set((state) => ({
          pendingInvitations: state.pendingInvitations.filter(inv => inv.id !== id)
        })),

      // Helper methods
      getWillingBox: (innermostId) => {
        const { willingBoxes } = get();
        return willingBoxes[innermostId] || null;
      },

      getWeeklyScores: (innermostId) => {
        const { weeklyScores } = get();
        return weeklyScores[innermostId] || [];
      },

      getCurrentWeek: (innermostId) => {
        const innermost = get().innermosts.find(i => i.id === innermostId);
        return innermost?.currentWeek || 1;
      },
    }),
    { name: 'innermost-store' }
  )
);