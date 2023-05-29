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
        <aside className="fixed top-[81px] left-0 bottom-0 w-[300px] border-r border-[#f5f5f5]">
            <form onSubmit={(e) => e.preventDefault()} className="w-full p-2.5">
                <label htmlFor="search" className="flex flex-col gap-[5px]">
                    <small className="text-[#f5f5f5] font-bold">SEARCH</small>
                    <input
                        ref={inputRef}
                        id="search"
                        type="search"
                        name="search"
                        autoComplete="new-password"
                        placeholder="Search by Palette Name"
                        className="border border-[#f5f5f5] text-sm rounded-md py-[5px] px-2.5 outline-dotted focus:outline-dotted outline-[#f5f5f5]"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </label>
            </form>
            <div className="p-2.5 flex flex-wrap gap-2.5">
                {['text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-pink-500', 'text-purple-500'].map((key) => (
                    <button
                        key={key}
                        type="button"
                        onClick={() => handleClick(key.split('-')[1])}
                        className={`${
                            selected === key.split('-')[1] ? 'bg-[#f5f5f5] text-[#121212]' : 'text-[#f5f5f5]'
                        } hover:animate-pulse capitalize text-xs font-medium font-mono flex items-center gap-[5px] p-2.5 border border-[#f5f5f5] rounded-2xl`}
                    >
                        <PaintBrushIcon className={`${key} w-4 h-4`} />
                        {key.split('-')[1]}
                    </button>
                ))}
            </div>
            <hr className="border-[#f5f5f5] m-2.5" />
            <div className="p-2.5 flex flex-wrap gap-2.5">
                <button
                    type="button"
                    onClick={() => handleClick('Rainbow')}
                    className="hover:animate-pulse text-[#f5f5f5] text-xs font-medium font-mono flex items-center gap-[5px] p-2.5 border border-[#f5f5f5] rounded-2xl"
                >
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    Rainbow
                </button>
            </div>
            <div className="flex items-center justify-center w-full mt-5 p-2.5">
                <button
                    type="button"
                    className="hover:animate-pulse w-full text-center uppercase text-[#f5f5f5] text-base font-medium font-mono p-2.5 border border-[#f5f5f5] rounded-2xl"
                    onClick={() => handleClick('')}
                >
                    reset
                </button>
            </div>
        </aside>
    );
}
