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
            <div className="w-full flex items-center justify-center my-5 gap-[5px] flex-wrap">
                {generateColors().map((color, index) => (
                    <PaletteButton key={index} variant="rounded" color={color} size="small" onClick={onClick} />
                ))}
            </div>
        </>
    );
}
