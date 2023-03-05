import { useEffect, useRef } from 'react';

import type { PalettePreviewPropsType } from 'components/PalettePreview/types';

export default function PalettePreview({ selectedInputValue, hexColors, colors, setColors, setHexColors, setSelectedInputValue, onColorChange }: PalettePreviewPropsType) {
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutsideSelect(event: globalThis.MouseEvent) {
            if (divRef.current && !divRef.current.contains(event.target as Node) && selectedInputValue.color) {
                const hex = selectedInputValue.color.replace('#', '');
                const rgb = `rgb(${parseInt(hex.slice(0, 2), 16)},${parseInt(hex.slice(2, 4), 16)},${parseInt(hex.slice(4), 16)})`;

                const changedColors = colors.slice(0);
                changedColors.splice(selectedInputValue.index, 1, rgb);
                setColors(changedColors);

                const changedHexColors = hexColors.slice(0);
                changedHexColors.splice(selectedInputValue.index, 1, `#${hex}`);
                setHexColors(changedHexColors);

                setSelectedInputValue({ color: '', index: 0 });
            }
        }

        window.addEventListener('click', handleClickOutsideSelect, true);
        return () => window.removeEventListener('click', handleClickOutsideSelect, true);
    }, [colors, setColors, hexColors, setHexColors, selectedInputValue, setSelectedInputValue]);

    return (
        <div ref={divRef} className="p-5 pb-0 bg-white min-w-[500px] rounded-b-none">
            <ul className="w-full h-[300px] rounded-md border-[#FAF4FF] flex">
                {colors?.map((color, index) => (
                    <label htmlFor={`color-${index}`} style={{ backgroundColor: color }} key={color} className="group relative w-full h-full flex items-end">
                        <input
                            id={`color-${index}`}
                            type="color"
                            defaultValue={hexColors[index]}
                            onChange={(e) => onColorChange(e, index)}
                            className="[transform:translate(-50%,-50%)] invisible absolute top-1/2 left-1/2"
                        />
                        <span className="w-full text-[10px] font-bold text-[#FAF4FF] bg-[#0000004d] p-[5px]">{hexColors[index]}</span>
                    </label>
                ))}
            </ul>
        </div>
    );
}
