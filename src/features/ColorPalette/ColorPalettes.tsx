import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

import { useBoundStore } from 'lib/zustand/store';

import DefaultColorPalette from 'features/ColorPalette/DefaultColorPalette';
import NeutralColorPalette from 'features/ColorPalette/NeutralColorPalette';
import OpacityColorPalette from 'features/ColorPalette/OpacityColorPalette';
import SimilarColorPalette from 'features/ColorPalette/SimilarColorPalette';

export default function ColorPalettes() {
    const { isCollapsed, setIsCollapsed, handleChangeColor } = useBoundStore();

    return (
        <div className={`${isCollapsed ? 'w-10 overflow-hidden bg-[#121212] text-[#f5f5f5]' : 'w-[300px] overflow-y-auto bg-[#f5f5f5] text-[#121212]'} fixed h-full min-h-screen p-5 transition-all`}>
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
    );
}
