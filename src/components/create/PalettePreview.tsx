import { FormEvent, RefObject } from 'react';

interface IProps {
    inputRef: RefObject<HTMLInputElement>;
    colors: string[];
    hexColors: string[];
    handleColorChange: (e: FormEvent<HTMLInputElement>, index: number) => void;
}

export default function PalettePreview({ inputRef, hexColors, colors, handleColorChange }: IProps) {
    return (
        <div className="p-5 pb-0 bg-white min-w-[500px] rounded-b-none">
            <ul className="w-full h-[300px] rounded-md border-[#FAF4FF] flex">
                {colors?.map((color, index) => (
                    <label htmlFor={`color-${index}`} style={{ backgroundColor: color }} key={color} className="group relative w-full h-full flex items-end">
                        <input
                            id={`color-${index}`}
                            ref={inputRef}
                            className="[transform:translate(-50%,-50%)] invisible absolute top-1/2 left-1/2"
                            type="color"
                            defaultValue={hexColors[index]}
                            onChange={(e) => handleColorChange(e, index)}
                        />
                        <span className="w-full text-[10px] font-bold text-[#FAF4FF] bg-[#0000004d] p-[5px]">{hexColors[index]}</span>
                    </label>
                ))}
            </ul>
        </div>
    );
}
