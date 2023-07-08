type ColorPaletteNameType = {
    title: string;
};

export default function ColorPaletteName({ title }: ColorPaletteNameType) {
    return <h3 className="font-mono text-lg font-bold uppercase">{title}</h3>;
}
