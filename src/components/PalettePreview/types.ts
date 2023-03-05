export type PalettePreviewPropsType = {
    selectedInputValue: { color: string; index: number };
    colors: string[];
    hexColors: string[];
    setColors: React.Dispatch<React.SetStateAction<string[]>>;
    setHexColors: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedInputValue: React.Dispatch<React.SetStateAction<{ color: string; index: number }>>;
    onColorChange: (e: React.FormEvent<HTMLInputElement>, index: number) => void;
};
