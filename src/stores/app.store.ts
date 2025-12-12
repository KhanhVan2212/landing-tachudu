import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  user: any;
  setUser: (user: any) => void;
  getUser: () => any;
  clearUser: () => void;
};

const useAppStore = create<State, [["zustand/persist", State]]>(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user: any) => set({ user }),
      getUser: () => {
        return get().user || null;
      },
      clearUser: () => set({ user: null }),
    }),
    {
      name: "app",
      version: 1,
    }
  )
);

export default useAppStore;
