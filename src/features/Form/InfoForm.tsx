import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MagnifyingGlassIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

import { useBoundStore } from 'lib/zustand/store';

export default function InfoForm() {
    const [tags, setTags] = useState('');
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const hexColors = useBoundStore((state) => state.hexColors);

    const handleSave = () => {
        if (hexColors.length) {
            const prev = JSON.parse(localStorage.getItem('colors') || '[]');
            const newColors = [...prev, { name: name || 'MY COLOR PALETTE', tags: [tags], colors: hexColors }];
            localStorage.setItem('colors', JSON.stringify(newColors));
            navigate('/list');
        }
    };

    return (
        <form className="w-[400px] flex items-center flex-col gap-5">
            <input
                type="text"
                name="paletteName"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                title="Palette Name"
                placeholder="Enter the Name of Palette"
                className="focus:outline-none text-sm w-full text-center font-mono border-t border-[#11052C] text-black font-bold p-2.5 bg-white rounded-md rounded-t-none"
            />
            <div className="w-full">
                <div className="flex items-center gap-2.5 mb-5 w-full text-[#121212] bg-[#f5f5f5] p-2.5 rounded-md">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                    <input title="search" type="search" className="bg-inherit w-full rounded-md outline-none" onChange={(e) => setTags(e.target.value)} />
                </div>
                <button
                    type="button"
                    disabled={!hexColors.length}
                    onClick={handleSave}
                    className="w-full mx-auto uppercase text-[#f5f5f5]  flex justify-center items-center gap-2.5 border border-[#f5f5f5] rounded-md p-2.5"
                >
                    <PaintBrushIcon className="w-5 h-5" />
                    Create
                </button>
            </div>
        </form>
    );
}
