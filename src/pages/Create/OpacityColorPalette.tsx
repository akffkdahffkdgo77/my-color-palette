import { ColorPaletteName, PaletteButton } from '@components';

import { useBoundStore } from '@zustand/store';

type OpacityColorPaletteType = {
    onClick: (rgb: string, color: string) => void;
};

export default function OpacityColorPalette({ onClick }: OpacityColorPaletteType) {
    const { hue, saturation, lightness } = useBoundStore((state) => ({ hue: state.hue, saturation: state.saturation, lightness: state.lightness }));

    return (
        <>
            <ColorPaletteName title="Opacity" />
            <div className="my-5 flex items-center gap-x-[5px]">
                {Array.from(Array(9)).map((_, index) => (
                    <PaletteButton key={index} variant="square" color={`hsla(${hue}deg, ${saturation}%, ${lightness}%, ${((index + 1) * 10) / 100})`} size="small" onClick={onClick} />
                ))}
            </div>
        </>
    );
}
