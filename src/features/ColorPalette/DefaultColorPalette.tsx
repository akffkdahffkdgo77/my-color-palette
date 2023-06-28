import ColorPaletteName from 'features/ColorPalette/ColorPaletteName';
import PaletteButton from 'features/ColorPalette/PaletteButton';
import { generateColors } from 'utils';

type DefaultColorPaletteType = {
    onClick: (rgb: string, color: string) => void;
};

export default function DefaultColorPalette({ onClick }: DefaultColorPaletteType) {
    return (
        <>
            <ColorPaletteName title="Color" />
            <div className="my-5 flex w-full flex-wrap items-center justify-center gap-[5px]">
                {generateColors().map((color, index) => (
                    <PaletteButton key={index} variant="rounded" color={color} size="small" onClick={onClick} />
                ))}
            </div>
        </>
    );
}
