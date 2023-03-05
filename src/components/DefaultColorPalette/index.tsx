import { generateColors } from 'utils';

import type { DefaultColorPalettePropsType } from 'components/DefaultColorPalette/types';

export default function DefaultColorPalette({ onClick }: DefaultColorPalettePropsType) {
    return (
        <>
            <h3 className="text-lg font-mono font-bold uppercase">Color</h3>
            <div className="w-full flex items-center justify-center my-5 gap-[5px] flex-wrap">
                {generateColors().map((color, index) => (
                    <div
                        aria-label={color}
                        title={color}
                        role="button"
                        tabIndex={0}
                        key={index}
                        style={{ backgroundColor: color }}
                        className="w-[25px] h-[25px] rounded-full border border-slate-600"
                        onClick={(e) => onClick(e, color)}
                        onKeyDown={(e) => onClick(e, color)}
                    />
                ))}
            </div>
        </>
    );
}
