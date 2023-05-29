import { useBoundStore } from 'lib/zustand/store';

import ColorPaletteName from 'features/ColorPalette/ColorPaletteName';
import PaletteButton from 'features/ColorPalette/PaletteButton';

type SimilarColorPaletteType = {
    onClick: (rgb: string, color: string) => void;
};

export default function SimilarColorPalette({ onClick }: SimilarColorPaletteType) {
    const { hue, saturation } = useBoundStore((state) => ({ hue: state.hue, saturation: state.saturation }));

    return (
        <>
            <ColorPaletteName title="Similar" />
            <div className="flex items-center gap-x-[5px] my-5">
                {[90, 70, 50, 30, 20].map((value, index) => (
                    <PaletteButton key={index} color={`hsl(${hue}deg, ${saturation}%, ${value}%)`} size="" variant="square" onClick={onClick} />
                ))}
            </div>
        </>
    );
}
