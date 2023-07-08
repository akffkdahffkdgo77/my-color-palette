'use client';

import DefaultColorPalette from './default-color-palette';
import InfoForm from './info-form';
import NeutralColorPalette from './neutral-color-palette';
import OpacityColorPalette from './opacity-color-palette';
import Preview from './preview';
import SimilarColorPalette from './similar-color-palette';

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { useBoundStore } from '@zustand/store';

export default function Create() {
    const { isCollapsed, setIsCollapsed, handleChangeColor } = useBoundStore();

    return (
        <section className="flex justify-between text-[#11052C] [min-height:calc(100vh-81px)]">
            <div
                className={`${isCollapsed ? 'w-10 overflow-hidden bg-[#121212] text-[#f5f5f5]' : 'w-[300px] overflow-y-auto bg-[#f5f5f5] text-[#121212]'} fixed h-full min-h-screen p-5 transition-all`}
            >
                <button type="button" className={`${isCollapsed ? 'right-2.5' : 'right-5'}  absolute top-5`} onClick={() => setIsCollapsed()}>
                    {isCollapsed ? <ChevronDoubleRightIcon className="h-5 w-5" /> : <ChevronDoubleLeftIcon className="h-5 w-5" />}
                </button>
                <div className={`${isCollapsed ? 'invisible' : ''} mb-[200px] h-full min-h-screen transition-all`}>
                    <DefaultColorPalette onClick={handleChangeColor} />
                    <NeutralColorPalette onClick={handleChangeColor} />
                    <SimilarColorPalette onClick={handleChangeColor} />
                    <OpacityColorPalette onClick={handleChangeColor} />
                </div>
            </div>
            <div className={`${isCollapsed ? 'ml-10' : 'ml-[300px]'} flex w-full flex-col items-center justify-center p-5`}>
                <Preview />
                <InfoForm />
            </div>
        </section>
    );
}
