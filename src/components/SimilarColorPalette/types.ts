export interface ISimilarColorPalette {
    hue: number;
    saturation: number;
    onClick: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>, color: string) => void;
}
