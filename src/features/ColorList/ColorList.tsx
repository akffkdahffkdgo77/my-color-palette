import { KeyboardEvent, MouseEvent } from 'react';

import html2canvas from 'html2canvas';

import ColorListItem from 'features/ColorList/ColorListItem';

type ColorsListType = {
    name: string;
    colors: string[];
};

export default function ColorsList({ name, colors }: ColorsListType) {
    const handleDownload = async (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
        const divElement = e.target as HTMLDivElement;
        const canvas = await html2canvas(divElement);
        const dataURL = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = `my-color-palette-${new Date().getTime()}.png`;
        a.click();
    };

    return (
        <div className="flex flex-col overflow-hidden">
            <div className="p-5 pb-0 bg-[#FAF4FF] rounded-md rounded-b-none" tabIndex={-1} role="button" onClick={handleDownload} onKeyDown={(e) => e.preventDefault()}>
                <ul className="w-[200px] h-[300px] rounded-md border-[#FAF4FF] flex flex-col">
                    {colors.map((color, index) => (
                        <ColorListItem key={`${color}-${index}`} color={color} />
                    ))}
                </ul>
            </div>
            <h3 className="text-[14px] text-center font-mono text-black font-bold p-5 bg-white rounded-md rounded-t-none">{name}</h3>
        </div>
    );
}
