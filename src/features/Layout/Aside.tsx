import { useCallback, useRef, useState } from 'react';

import { PaintBrushIcon, StarIcon } from '@heroicons/react/24/outline';
import _ from 'lodash';

import { useBoundStore } from 'lib/zustand/store';

import { COLORS } from 'utils';

type ColorsType = {
    name: string;
    colors: string[];
    tags: string[];
};

export default function Aside() {
    const setColorList = useBoundStore((state) => state.setColorList);
    const [selected, setSelected] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const searchByTag = (search: string) => {
        const defaultList: ColorsType[] = JSON.parse(localStorage.getItem('colors') || JSON.stringify('')) || COLORS;
        if (!search) {
            setColorList(defaultList);
        } else {
            setColorList(defaultList.filter((val) => val.tags.map((tag) => tag.toLowerCase()).includes(search.toLowerCase())));
        }
    };

    const searchByName = (search: string) => {
        setSelected('');
        const defaultList: ColorsType[] = JSON.parse(localStorage.getItem('colors') || JSON.stringify('')) || COLORS;
        setColorList(defaultList.filter((val) => val.name.toLowerCase().includes(search.toLowerCase())));
    };

    const handleClick = (search: string) => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        setSelected(search);
        searchByTag(search);
    };

    const handleSearch = useCallback(
        _.debounce((newValue: string) => searchByName(newValue), 1000),
        []
    );

    return (
        <aside className="fixed bottom-0 left-0 top-[81px] w-[300px] border-r border-[#f5f5f5]">
            <form onSubmit={(e) => e.preventDefault()} className="w-full p-2.5">
                <label htmlFor="search" className="flex flex-col gap-[5px]">
                    <small className="font-bold text-[#f5f5f5]">SEARCH</small>
                    <input
                        ref={inputRef}
                        id="search"
                        type="search"
                        name="search"
                        autoComplete="new-password"
                        placeholder="Search by Palette Name"
                        className="rounded-md border border-[#f5f5f5] px-2.5 py-[5px] text-sm outline-dotted outline-[#f5f5f5] focus:outline-dotted"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </label>
            </form>
            <div className="flex flex-wrap gap-2.5 p-2.5">
                {['text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-pink-500', 'text-purple-500'].map((key) => (
                    <button
                        key={key}
                        type="button"
                        onClick={() => handleClick(key.split('-')[1])}
                        className={`${
                            selected === key.split('-')[1] ? 'bg-[#f5f5f5] text-[#121212]' : 'text-[#f5f5f5]'
                        } flex items-center gap-[5px] rounded-2xl border border-[#f5f5f5] p-2.5 font-mono text-xs font-medium capitalize hover:animate-pulse`}
                    >
                        <PaintBrushIcon className={`${key} h-4 w-4`} />
                        {key.split('-')[1]}
                    </button>
                ))}
            </div>
            <hr className="m-2.5 border-[#f5f5f5]" />
            <div className="flex flex-wrap gap-2.5 p-2.5">
                <button
                    type="button"
                    onClick={() => handleClick('Rainbow')}
                    className="flex items-center gap-[5px] rounded-2xl border border-[#f5f5f5] p-2.5 font-mono text-xs font-medium text-[#f5f5f5] hover:animate-pulse"
                >
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    Rainbow
                </button>
            </div>
            <div className="mt-5 flex w-full items-center justify-center p-2.5">
                <button
                    type="button"
                    className="w-full rounded-2xl border border-[#f5f5f5] p-2.5 text-center font-mono text-base font-medium uppercase text-[#f5f5f5] hover:animate-pulse"
                    onClick={() => handleClick('')}
                >
                    reset
                </button>
            </div>
        </aside>
    );
}
