import { NavLink } from 'react-router-dom';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { useBoundStore } from 'lib/zustand/store';

export default function Menu() {
    const { isOpen, setIsOpen } = useBoundStore((state) => ({ isOpen: state.isOpen, setIsOpen: state.setIsOpen }));

    return (
        <nav className={`${isOpen ? 'w-full' : 'w-0 invisible'} transition-all [background:rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center`}>
            <button type="button" className="absolute top-5 right-5 group" onClick={() => setIsOpen()}>
                <XMarkIcon className="w-10 h-10 text-[#f5f5f5] group-hover:rotate-45 transition-all" />
            </button>
            <ul className="text-[#F5F5F5] font-mono font-semibold text-xl text-center">
                <li className="h-10 hover:animate-pulse">
                    <NavLink onClick={() => setIsOpen()} to="/" className={({ isActive }) => (isActive ? 'text-yellow-300' : '')}>
                        Home
                    </NavLink>
                </li>
                <li className="h-10 hover:animate-pulse">
                    <NavLink onClick={() => setIsOpen()} to="/list" className={({ isActive }) => (isActive ? 'text-yellow-300' : '')}>
                        List
                    </NavLink>
                </li>
                <li className="h-10 hover:animate-pulse">
                    <NavLink onClick={() => setIsOpen()} to="/create" className={({ isActive }) => (isActive ? 'text-yellow-300' : '')}>
                        Create
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
