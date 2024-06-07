import { create } from "zustand";

type Store = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const useIsOpen = create<Store>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useIsOpen;
