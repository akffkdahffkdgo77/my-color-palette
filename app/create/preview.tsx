'use client';

import { useEffect, useRef, useState } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useBoundStore } from '@zustand/store';

export default function Preview() {
    const divRef = useRef<HTMLDivElement | null>(null);
    const { hexColors, colors, setColors, setHexColors } = useBoundStore((state) => ({
        colors: state.colors,
        hexColors: state.hexColors,
        setColors: state.setColors,
        setHexColors: state.setHexColors
    }));

    const [selectedInputValue, setSelectedInputValue] = useState({ color: '', index: 0 });

    const handleColorChange = (e: React.FormEvent<HTMLInputElement>, index: number) => setSelectedInputValue({ color: e.currentTarget.value, index });

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

    const handleDelete = (index: number) => {
        const filteredHex = hexColors.filter((_, idx) => idx !== index);
        const filteredColors = colors.filter((_, idx) => idx !== index);
        setColors(filteredColors);
        setHexColors(filteredHex);
    };

    return (
        <div ref={divRef} className="custom-scroll max-h-[350px] w-[400px] overflow-hidden overflow-y-auto rounded-md rounded-b-none border border-[#f5f5f5] bg-white">
            <ul className="flex min-h-[300px] w-full flex-col rounded-md border-[#FAF4FF]">
                {colors?.map((color, index) => (
                    <div key={`${color}-${index}`} className="group relative">
                        <button type="button" onClick={() => handleDelete(index)} className="invisible absolute right-[5px] top-[5px] z-10 group-hover:visible">
                            <XMarkIcon className="h-4 w-4 rounded-full border border-white bg-black text-[#f5f5f5]" />
                        </button>
                        <label htmlFor={`color-${index}`} style={{ backgroundColor: color }} className="relative block h-full min-h-[50px] w-full shadow-xl">
                            <input
                                id={`color-${index}`}
                                type="color"
                                value={hexColors[index]}
                                onChange={(e) => handleColorChange(e, index)}
                                className="invisible absolute left-1/2 top-1/2 [transform:translate(-50%,-50%)]"
                            />
                        </label>
                    </div>
                ))}
            </ul>
        </div>
    );
}
