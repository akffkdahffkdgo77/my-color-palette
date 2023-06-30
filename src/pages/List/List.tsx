import { useEffect, useRef, useState } from 'react';

import html2canvas from 'html2canvas';

import { COLORS } from '@utils/color';
import { useBoundStore } from '@zustand/store';

export default function List() {
    const colorList = useBoundStore((state) => state.colorList);

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('colors') || '[]')?.length) {
            localStorage.setItem('colors', JSON.stringify(COLORS));
        }
    }, []);

    const handleDownload = async (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        const divElement = e.target as HTMLDivElement;
        const canvas = await html2canvas(divElement);
        const dataURL = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = `my-color-palette-${new Date().getTime()}.png`;
        a.click();
    };

    const timerId = useRef<NodeJS.Timeout>();
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, hex: string) => {
        e.stopPropagation();
        if (navigator.clipboard) {
            const textarea = document.createElement('textarea');
            textarea.innerHTML = hex;
            document.body.appendChild(textarea);
            textarea.select();
            navigator.clipboard.writeText(textarea.innerHTML).then(() => {
                document.body.removeChild(textarea);
                setIsCopied(true);
                timerId.current = setTimeout(() => setIsCopied(false), 300);
            });
        } else {
            throw new Error('Clipboard API not supported');
        }
    };

    useEffect(() => {
        return () => clearTimeout(timerId.current);
    }, []);

    return (
        <div className="ml-[300px] flex flex-wrap items-center justify-start gap-5 p-10">
            {colorList?.map(({ name, colors }, index) => (
                <div key={`${name}-${colors}-${index}`} className="flex flex-col overflow-hidden">
                    <div className="rounded-md rounded-b-none bg-[#FAF4FF] p-5 pb-0" tabIndex={-1} role="button" onClick={handleDownload} onKeyDown={(e) => e.preventDefault()}>
                        <ul className="flex h-[300px] w-[200px] flex-col rounded-md border-[#FAF4FF]">
                            {colors.map((color, idx) => (
                                <li key={`${color}-${idx}`} style={{ backgroundColor: color }} className="group flex h-full w-full items-end">
                                    <button
                                        type="button"
                                        className={`${isCopied ? 'text-green-300' : 'text-[#FAF4FF]'} hidden bg-[#9e9e9e4d] p-[5px] text-[12px] group-hover:inline`}
                                        onClick={(e) => handleCopy(e, color)}
                                    >
                                        {color}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h3 className="rounded-md rounded-t-none bg-white p-5 text-center font-mono text-[14px] font-bold text-black">{name}</h3>
                </div>
            ))}
        </div>
    );
}
