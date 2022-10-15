export function neutralColors() {
    return Array.from(Array(21)).map((_, index) => `hsla(0deg, 0%, ${index * 5}%, 1)`);
}

export function generateColors() {
    const red = Array.from(Array(20)).map((_, index) => `hsla(${index * 3}deg, 100%, 50%, 1)`); // 0deg, 100%, 50% -> 57deg, 100%, 50%
    const green = Array.from(Array(21)).map((_, index) => `hsla(${60 + index * 3}deg, 100%, 50%, 1)`); // 60deg, 100%, 50% -> 120deg, 100%, 50%
    const blue = Array.from(Array(20)).map((_, index) => `hsla(${120 + (index + 1) * 3}deg, 100%, 50%, 1)`); // 123deg, 100%, 50% -> 180deg, 100%, 50%
    const purple = Array.from(Array(20)).map((_, index) => `hsla(${180 + (index + 1) * 3}deg, 100%, 50%, 1)`); // 183deg, 100%, 50% -> 240deg, 100%, 50%
    const pink = Array.from(Array(20)).map((_, index) => `hsla(${240 + (index + 1) * 3}deg, 100%, 50%, 1)`); // 243deg, 100%, 50% -> 300deg, 100%, 50%
    const last = Array.from(Array(19)).map((_, index) => `hsla(${300 + (index + 1) * 3 === 360 ? 0 : 300 + (index + 1) * 3}deg, 100%, 50%, 1)`); // 300deg, 100%, 50% -> 360deg, 100%, 50%
    return [...red, ...green, ...blue, ...purple, ...pink, ...last];
}

export function convertToHex(color: string) {
    const hex = Number(color).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}

export const COLORS = [
    {
        name: 'Rainbow',
        colors: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#6366f1', '#a855f7']
    },
    {
        name: 'Pink',
        colors: ['#e91e63', '#e91e63e6', '#e91e63cc', '#e91e63b3', '#e91e6399', '#e81f6280', '#e81f6266', '#e81f624d', '#e81f6233', '#e81f621a']
    },
    {
        name: 'Blue',
        colors: ['#2196f3', '#2196f3e6', '#2196f3cc', '#2196f3b3', '#2196f399', '#2196f380', '#2196f366', '#2196f34d', '#2196f333', '#2196f31a']
    }
];

// rgb -> hex
// # __ / __ / __
//   R    G    B
// F <- lighter darker -> 0
export const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// 0.1 -> 0.9
export const OPACITY = ['1a', '33', '4d', '66', '80', '99', 'b3', 'cc', 'e6'];
