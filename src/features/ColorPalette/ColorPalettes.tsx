import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

import { useBoundStore } from 'lib/zustand/store';

import DefaultColorPalette from 'features/ColorPalette/DefaultColorPalette';
import NeutralColorPalette from 'features/ColorPalette/NeutralColorPalette';
import OpacityColorPalette from 'features/ColorPalette/OpacityColorPalette';
import SimilarColorPalette from 'features/ColorPalette/SimilarColorPalette';

export default function ColorPalettes() {
    const { isCollapsed, setIsCollapsed, handleChangeColor } = useBoundStore();

    return (
        <div className={`${isCollapsed ? 'w-10 overflow-hidden bg-[#121212] text-[#f5f5f5]' : 'w-[300px] overflow-y-auto bg-[#f5f5f5] text-[#121212]'} transition-all fixed min-h-screen h-full p-5`}>
            <button type="button" className={`${isCollapsed ? 'right-2.5' : 'right-5'}  absolute top-5`} onClick={() => setIsCollapsed()}>
                {isCollapsed ? <ChevronDoubleRightIcon className="w-5 h-5" /> : <ChevronDoubleLeftIcon className="w-5 h-5" />}
            </button>
            <div className={`${isCollapsed ? 'invisible' : ''} transition-all h-full min-h-screen mb-[200px]`}>
                <DefaultColorPalette onClick={handleChangeColor} />
                <NeutralColorPalette onClick={handleChangeColor} />
                <SimilarColorPalette onClick={handleChangeColor} />
                <OpacityColorPalette onClick={handleChangeColor} />
            </div>
        </div>
    );
}
