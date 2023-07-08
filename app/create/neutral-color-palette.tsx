import { ColorPaletteName, PaletteButton } from '@components';

import { neutralColors } from '@utils/color';

type NeutralColorPaletteType = {
    onClick: (rgb: string, color: string) => void;
};

export default function NeutralColorPalette({ onClick }: NeutralColorPaletteType) {
    return (
        <>
            <ColorPaletteName title="Neutral" />
            <div className="my-5 flex w-full flex-wrap items-center justify-start gap-x-[5px] gap-y-2.5">
                {neutralColors().map((color, index) => (
                    <PaletteButton key={index} color={color} size="large" variant="rounded" onClick={onClick} />
                ))}
            </div>
        </>
    );
}
