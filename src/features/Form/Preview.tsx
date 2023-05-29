import { useEffect, useRef, useState } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { useBoundStore } from 'lib/zustand/store';

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
        <div ref={divRef} className="bg-white border border-[#f5f5f5] w-[400px] max-h-[350px] custom-scroll overflow-y-auto rounded-b-none rounded-md overflow-hidden">
            <ul className="w-full min-h-[300px] rounded-md border-[#FAF4FF] flex flex-col">
                {colors?.map((color, index) => (
                    <div key={`${color}-${index}`} className="relative group">
                        <button type="button" onClick={() => handleDelete(index)} className="group-hover:visible invisible absolute z-10 top-[5px] right-[5px]">
                            <XMarkIcon className="w-4 h-4 text-[#f5f5f5] bg-black border-white border rounded-full" />
                        </button>
                        <label htmlFor={`color-${index}`} style={{ backgroundColor: color }} className="relative block w-full h-full min-h-[50px] shadow-xl">
                            <input
                                id={`color-${index}`}
                                type="color"
                                value={hexColors[index]}
                                onChange={(e) => handleColorChange(e, index)}
                                className="[transform:translate(-50%,-50%)] invisible absolute top-1/2 left-1/2"
                            />
                        </label>
                    </div>
                ))}
            </ul>
        </div>
    );
}
