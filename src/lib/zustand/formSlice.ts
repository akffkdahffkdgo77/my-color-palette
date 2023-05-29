import { StateCreator } from 'zustand';

import { OPACITY, convertToHex } from 'utils';

export interface FormSlice {
    isCollapsed: boolean;
    colors: string[];
    hexColors: string[];
    hue: number;
    saturation: number;
    lightness: number;
    setIsCollapsed: () => void;
    setColors: (newColors: string[]) => void;
    setHexColors: (newColors: string[]) => void;
    setHue: (newValue: number) => void;
    setSaturation: (newValue: number) => void;
    setLightness: (newValue: number) => void;
    handleChangeColor: (rgb: string, color: string) => void;
}

const DEFAULT_COLORS = ['hsl(0, 0%, 7%, 1)', 'hsl(0, 0%, 96%, 1)', 'hsl(0, 0%, 7%, 1)', 'hsl(0, 0%, 96%, 1)', 'hsl(0, 0%, 7%, 1)', 'hsl(0, 0%, 96%, 1)'];
const DEFAULT_HEX_COLORS = ['#121212', '#f5f5f5', '#121212', '#f5f5f5', '#121212', '#f5f5f5'];

export const createFormSlice: StateCreator<FormSlice> = (set) => ({
    isCollapsed: true,
    colors: DEFAULT_COLORS,
    hexColors: DEFAULT_HEX_COLORS,
    hue: 258,
    saturation: 80,
    lightness: 10,
    handleChangeColor: (rgb: string, color: string) =>
        set((state) => {
            const isRGBA = !rgb.includes('rgb(');
            const rgbArray = rgb.includes('rgb(') ? rgb.replace('rgb(', '').replace(')', '').split(', ') : rgb.replace('rgba(', '').replace(')', '').split(', ');

            const hexCode = Array.from(Array(isRGBA ? 4 : 3)).reduce((prev, cur, index) => {
                let rgbToHex = '';
                if (index === 3) {
                    rgbToHex = prev + OPACITY[Number(rgbArray[3].replace('0.', '')) - 1];
                } else {
                    rgbToHex = `${prev}${convertToHex(rgbArray[index])}`;
                }
                return rgbToHex;
            }, '');

            const rgba = color.split('(')[1].split(')')[0].split(',');
            return {
                hue: Number(rgba[0].replace('deg', '')),
                saturation: Number(rgba[1].replace('%', '')),
                lightness: Number(rgba[2].replace('%', '')),
                colors: [...state.colors, color],
                hexColors: [...state.hexColors, `#${hexCode}`]
            };
        }),
    setIsCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
    setColors: (newColors) => set(() => ({ colors: newColors })),
    setHexColors: (newColors) => set(() => ({ hexColors: newColors })),
    setHue: (newValue) => set(() => ({ hue: newValue })),
    setSaturation: (newValue) => set(() => ({ saturation: newValue })),
    setLightness: (newValue) => set(() => ({ lightness: newValue }))
});
