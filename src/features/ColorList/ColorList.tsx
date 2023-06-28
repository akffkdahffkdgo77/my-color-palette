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
            <div className="rounded-md rounded-b-none bg-[#FAF4FF] p-5 pb-0" tabIndex={-1} role="button" onClick={handleDownload} onKeyDown={(e) => e.preventDefault()}>
                <ul className="flex h-[300px] w-[200px] flex-col rounded-md border-[#FAF4FF]">
                    {colors.map((color, index) => (
                        <ColorListItem key={`${color}-${index}`} color={color} />
                    ))}
                </ul>
            </div>
            <h3 className="rounded-md rounded-t-none bg-white p-5 text-center font-mono text-[14px] font-bold text-black">{name}</h3>
        </div>
    );
}
