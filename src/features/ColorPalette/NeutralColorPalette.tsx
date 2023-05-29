import ColorPaletteName from 'features/ColorPalette/ColorPaletteName';
import PaletteButton from 'features/ColorPalette/PaletteButton';
import { neutralColors } from 'utils';

type NeutralColorPaletteType = {
    onClick: (rgb: string, color: string) => void;
};

export default function NeutralColorPalette({ onClick }: NeutralColorPaletteType) {
    return (
        <>
            <ColorPaletteName title="Neutral" />
            <div className="w-full flex items-center justify-start my-5 gap-x-[5px] gap-y-2.5 flex-wrap">
                {neutralColors().map((color, index) => (
                    <PaletteButton key={index} color={color} size="large" variant="rounded" onClick={onClick} />
                ))}
            </div>
        </>
    );
}
