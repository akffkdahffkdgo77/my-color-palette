import { useEffect, useRef, useState } from 'react';

type ColorListItemType = {
    color: string;
};

export default function ColorListItem({ color }: ColorListItemType) {
    const timerId = useRef<NodeJS.Timeout>();
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        return () => clearTimeout(timerId.current);
    }, []);

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

    return (
        <li style={{ backgroundColor: color }} className="group flex h-full w-full items-end">
            <button type="button" className={`${isCopied ? 'text-green-300' : 'text-[#FAF4FF]'} hidden bg-[#9e9e9e4d] p-[5px] text-[12px] group-hover:inline`} onClick={(e) => handleCopy(e, color)}>
                {color}
            </button>
        </li>
    );
}
