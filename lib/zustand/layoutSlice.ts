import { StateCreator } from 'zustand';

export interface LayoutSlice {
    isOpen: boolean;
    setIsOpen: () => void;
}

export const createLayoutSlice: StateCreator<LayoutSlice> = (set) => ({
    isOpen: false,
    setIsOpen: () => set((state) => ({ isOpen: !state.isOpen }))
});
