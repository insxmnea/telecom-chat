import { create } from "zustand";

export const useSessionStore = create(() => ({
  currentUserId: 101,
}));
