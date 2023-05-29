import { Bars3Icon } from '@heroicons/react/24/outline';

import { useBoundStore } from 'lib/zustand/store';

export default function Header() {
    const setIsOpen = useBoundStore((state) => state.setIsOpen);

    return (
        <header className="text-[#F5F5F5] bg-[#121212] border-b border-[#f5f5f5] fixed p-5 top-0 left-0 right-0 font-mono font-bold text-4xl flex items-center">
            <button type="button" title="메뉴 열기" onClick={() => setIsOpen()}>
                <Bars3Icon className="w-10 h-10 mr-5" />
            </button>
            <h1>My Color Palette</h1>
        </header>
    );
}
