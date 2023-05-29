import { StateCreator } from 'zustand';

import { COLORS } from 'utils';

type ColorsType = {
    name: string;
    colors: string[];
    tags: string[];
};

export interface ColorSlice {
    colorList: ColorsType[];
    setColorList: (newColors: ColorsType[]) => void;
}

const colorList: ColorsType[] = JSON.parse(localStorage.getItem('colors') || JSON.stringify('')) || COLORS;

export const createColorSlice: StateCreator<ColorSlice> = (set) => ({
    colorList,
    setColorList: (newColors) => set(() => ({ colorList: newColors }))
});
