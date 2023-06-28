import { Bars3Icon } from '@heroicons/react/24/outline';

import { useBoundStore } from 'lib/zustand/store';

export default function Header() {
    const setIsOpen = useBoundStore((state) => state.setIsOpen);

    return (
        <header className="fixed left-0 right-0 top-0 flex items-center border-b border-[#f5f5f5] bg-[#121212] p-5 font-mono text-4xl font-bold text-[#F5F5F5]">
            <button type="button" title="메뉴 열기" onClick={() => setIsOpen()}>
                <Bars3Icon className="mr-5 h-10 w-10" />
            </button>
            <h1>My Color Palette</h1>
        </header>
    );
}
