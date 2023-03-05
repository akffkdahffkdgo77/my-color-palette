export type SimilarColorPalettePropsType = {
    hue: number;
    saturation: number;
    onClick: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>, color: string) => void;
};
