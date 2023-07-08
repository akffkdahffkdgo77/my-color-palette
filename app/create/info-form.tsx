'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

import { MagnifyingGlassIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import { useBoundStore } from '@zustand/store';

export default function InfoForm() {
    const navigate = useRouter();
    const { hexColors, init: reset, setColorList } = useBoundStore();
    const [tags, setTags] = useState('');
    const [name, setName] = useState('');

    const handleSave = () => {
        if (hexColors.length) {
            const prev = getLocalStorage('colors') ?? [];
            const newColors = [...prev, { idx: (prev?.[prev.length - 1]?.idx ?? 0) + 1, name: name || 'MY COLOR PALETTE', tags: [tags], colors: hexColors }];
            setLocalStorage('colors', newColors);
            setColorList(newColors);
            reset();
            navigate.push('/list');
        }
    };

    return (
        <form className="flex w-[400px] flex-col items-center gap-5">
            <input
                type="text"
                name="paletteName"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                title="Palette Name"
                placeholder="Enter the Name of Palette"
                className="w-full rounded-md rounded-t-none border-t border-[#11052C] bg-white p-2.5 text-center font-mono text-sm font-bold text-black focus:outline-none"
            />
            <div className="w-full">
                <div className="mb-5 flex w-full items-center gap-2.5 rounded-md bg-[#f5f5f5] p-2.5 text-[#121212]">
                    <MagnifyingGlassIcon className="h-5 w-5" />
                    <input title="search" type="search" className="w-full rounded-md bg-inherit outline-none" onChange={(e) => setTags(e.target.value)} />
                </div>
                <button
                    type="button"
                    disabled={!hexColors.length}
                    onClick={handleSave}
                    className="mx-auto flex w-full items-center  justify-center gap-2.5 rounded-md border border-[#f5f5f5] p-2.5 uppercase text-[#f5f5f5]"
                >
                    <PaintBrushIcon className="h-5 w-5" />
                    Create
                </button>
            </div>
        </form>
    );
}
