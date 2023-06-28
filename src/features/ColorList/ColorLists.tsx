import { useEffect } from 'react';

import { useBoundStore } from 'lib/zustand/store';

import ColorsList from 'features/ColorList/ColorList';
import { COLORS } from 'utils';

export default function ColorLists() {
    const colorList = useBoundStore((state) => state.colorList);

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('colors') || '[]')?.length) {
            localStorage.setItem('colors', JSON.stringify(COLORS));
        }
    }, []);

    return (
        <div className="ml-[300px] flex flex-wrap items-center justify-start gap-5 p-10">
            {colorList?.map(({ name, colors }, index) => (
                <ColorsList key={`${name}-${index}`} name={name} colors={colors} />
            ))}
        </div>
    );
}
