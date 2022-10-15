import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';

import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';

interface IProps {
    name: string;
    colors: string[];
}

export default function ColorsList({ name, colors }: IProps) {
    const timerId = useRef<NodeJS.Timeout>();
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        return () => clearTimeout(timerId.current);
    }, []);

    const handleCopy = (e: MouseEvent, hex: string) => {
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
        <div className="flex flex-col">
            <div className="p-5 pb-0 bg-[#FAF4FF] rounded-md rounded-b-none" tabIndex={-1} role="button" onClick={handleDownload} onKeyDown={(e) => e.preventDefault()}>
                <ul className="w-[200px] h-[300px] rounded-md border-[#FAF4FF] flex flex-col">
                    {colors.map((color) => (
                        <li key={color} style={{ backgroundColor: color }} className="group w-full h-full flex items-end">
                            <button
                                style={{ backgroundColor: color }}
                                type="button"
                                className={`${isCopied ? 'text-green-300' : 'text-[#FAF4FF]'} group-hover:inline p-[5px] text-[12px] hidden bg-[#9e9e9e4d]`}
                                onClick={(e) => handleCopy(e, color)}
                            >
                                {color}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/create">
                <h3 className="hover:animate-pulse text-[14px] text-center font-mono text-black font-bold p-5 bg-white rounded-md rounded-t-none">{name}</h3>
            </Link>
        </div>
    );
}
