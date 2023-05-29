type ColorPaletteNameType = {
    title: string;
};

export default function ColorPaletteName({ title }: ColorPaletteNameType) {
    return <h3 className="text-lg font-mono font-bold uppercase">{title}</h3>;
}
