import { useBoundStore } from 'lib/zustand/store';

import ColorPaletteName from 'features/ColorPalette/ColorPaletteName';
import PaletteButton from 'features/ColorPalette/PaletteButton';

type OpacityColorPaletteType = {
    onClick: (rgb: string, color: string) => void;
};

export default function OpacityColorPalette({ onClick }: OpacityColorPaletteType) {
    const { hue, saturation, lightness } = useBoundStore((state) => ({ hue: state.hue, saturation: state.saturation, lightness: state.lightness }));

    return (
        <>
            <ColorPaletteName title="Opacity" />
            <div className="flex items-center gap-x-[5px] my-5">
                {Array.from(Array(9)).map((_, index) => (
                    <PaletteButton key={index} variant="square" color={`hsla(${hue}deg, ${saturation}%, ${lightness}%, ${((index + 1) * 10) / 100})`} size="small" onClick={onClick} />
                ))}
            </div>
        </>
    );
}