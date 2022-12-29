export interface IPalettePreview {
    inputRef: React.RefObject<HTMLInputElement>;
    colors: string[];
    hexColors: string[];
    handleColorChange: (e: React.FormEvent<HTMLInputElement>, index: number) => void;
}
