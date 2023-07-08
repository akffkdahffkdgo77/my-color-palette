'use client';

import { StateCreator } from 'zustand';

import { setLocalStorage } from '@/utils/localStorage';

import { ColorsType } from '@utils/color';

export interface ColorSlice {
    colorList: ColorsType[];
    setColorList: (newColors: ColorsType[]) => void;
    removeColor: (selectedIndex: number) => void;
}

const colorList: ColorsType[] = [];

export const createColorSlice: StateCreator<ColorSlice> = (set) => ({
    colorList,
    setColorList: (newColors) => set(() => ({ colorList: newColors })),
    removeColor: (selectedIndex) =>
        set((state) => {
            const newColorList = state.colorList.filter(({ idx }) => idx !== selectedIndex);
            setLocalStorage('colors', newColorList);
            return { colorList: newColorList };
        })
});
