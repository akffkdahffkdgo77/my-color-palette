import { NavLink } from 'react-router-dom';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useBoundStore } from '@zustand/store';

const LINKS = [
    { path: '/', text: 'Home' },
    { path: '/list', text: 'List' },
    { path: '/create', text: 'Create' }
];

export default function Menu() {
    const { isOpen, setIsOpen } = useBoundStore((state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }));

    return (
        <nav className={`${isOpen ? 'w-full' : 'invisible w-0'} fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center transition-all [background:rgba(0,0,0,0.5)]`}>
            <button type="button" className="group absolute right-5 top-5" onClick={() => setIsOpen()}>
                <XMarkIcon className="h-10 w-10 text-[#f5f5f5] transition-all group-hover:rotate-45" />
            </button>
            <ul className="text-center font-mono text-xl font-semibold text-[#F5F5F5]">
                {LINKS.map(({ path, text }) => (
                    <li key={text} className="h-10 hover:animate-pulse">
                        <NavLink onClick={() => setIsOpen()} to={path} className={({ isActive }) => (isActive ? 'text-yellow-300' : '')}>
                            {text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
