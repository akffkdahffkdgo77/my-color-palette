import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';

import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';

const colors = [
    {
        name: 'Rainbow',
        colors: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#6366f1', '#a855f7']
    },
    {
        name: 'Pink',
        colors: ['#e91e63', '#e91e63e6', '#e91e63cc', '#e91e63b3', '#e91e6399', '#e81f6280', '#e81f6266', '#e81f624d', '#e81f6233', '#e81f621a']
    },
    {
        name: 'Blue',
        colors: ['#2196f3', '#2196f3e6', '#2196f3cc', '#2196f3b3', '#2196f399', '#2196f380', '#2196f366', '#2196f34d', '#2196f333', '#2196f31a']
    }
];

export default function Home() {
    const timerId = useRef<NodeJS.Timeout>();
    const [isCopied, setIsCopied] = useState(false);
    const myColors: { name: string; colors: string[] }[] = JSON.parse(localStorage.getItem('colors') || JSON.stringify('')) || colors;

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('colors') || '[]')?.length) {
            localStorage.setItem('colors', JSON.stringify(colors));
        }

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
        <main className="w-full min-h-screen bg-[#11052C] p-10 flex flex-col items-center justify-center">
            <h1 className="w-full text-center text-5xl mb-10 font-bold underline text-[#FAF4FF]">My Color Palette</h1>
            <section className="max-w-5xl mx-auto">
                <h2>My Colors</h2>
                <div className="flex flex-wrap gap-5 items-center">
                    {myColors?.map(({ name, colors }) => (
                        <div className="flex flex-col" key={name}>
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
                    ))}
                </div>
            </section>
        </main>
    );
}
