import { neutralColors } from 'utils';

import type { NeutralColorPalettePropsType } from 'components/NeutralColorPalette/types';

export default function NeutralColorPalette({ onClick }: NeutralColorPalettePropsType) {
    return (
        <>
            <h3 className="text-lg font-mono font-bold uppercase">Neutral</h3>
            <div className="w-full flex items-center justify-start my-5 gap-x-[5px] gap-y-2.5 flex-wrap">
                {neutralColors().map((color, index) => (
                    <div
                        key={index}
                        aria-label={color}
                        title={color}
                        role="button"
                        tabIndex={0}
                        style={{ backgroundColor: color }}
                        className="w-[35px] h-[35px] rounded-full border border-slate-600"
                        onClick={(e) => onClick(e, color)}
                        onKeyDown={(e) => onClick(e, color)}
                    />
                ))}
            </div>
        </>
    );
}
