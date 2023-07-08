'use client';

import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import html2canvas from 'html2canvas';

import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

import { FolderArrowDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import { COLORS } from '@utils/color';
import { useBoundStore } from '@zustand/store';

export default function List() {
    const { colorList, removeColor, setColorList } = useBoundStore();
    const timerId = useRef<NodeJS.Timeout>();
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const savedColorList = getLocalStorage('colors');
        if (!savedColorList.length) {
            setLocalStorage('colors', COLORS);
            setColorList(savedColorList);
        } else if (!colorList.length) {
            setColorList(savedColorList);
        }
    }, []);

    const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttonElement = e.currentTarget as HTMLButtonElement;
        const divElement = buttonElement.parentNode as HTMLDivElement;
        divElement.style.display = 'none';
        const canvas = await html2canvas(buttonElement.parentNode?.parentNode?.parentNode as HTMLElement);
        const dataURL = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = `my-color-palette-${new Date().getTime()}.png`;
        a.click();
        divElement.style.display = 'block';
    };

    const handleRemove = (index: number) => removeColor(index);

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
                timerId.current = setTimeout(() => setIsCopied(false), 500);
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
            {colorList?.map(({ idx, name, colors }, index) => (
                <div key={`${name}-${colors}-${index}`} className="relative flex flex-col overflow-hidden">
                    <div className="rounded-md rounded-b-none bg-[#FAF4FF] p-5 pb-0 pt-10">
                        <div>
                            <button type="button" className="absolute right-12 top-2 hover:opacity-70" onClick={handleDownload}>
                                <FolderArrowDownIcon className="h-6 w-6 rounded-md border border-black p-1" />
                            </button>
                            <button type="button" className="absolute right-5 top-2 hover:opacity-70" onClick={() => handleRemove(idx)}>
                                <TrashIcon className="h-6 w-6 rounded-md border border-red-500 p-px text-red-500" />
                            </button>
                        </div>
                        <ul className="flex h-[300px] w-[200px] flex-col rounded-md border-[#FAF4FF]">
                            {colors.map((color, colorIdx) => (
                                <li key={`${color}-${colorIdx}`} style={{ backgroundColor: color }} className="group flex h-full w-full items-end">
                                    <button
                                        type="button"
                                        onClick={(e) => handleCopy(e, color)}
                                        className={cn('hidden bg-[#9e9e9e4d] p-[5px] text-[12px] group-hover:inline', isCopied ? 'text-green-300' : 'text-[#FAF4FF]')}
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
