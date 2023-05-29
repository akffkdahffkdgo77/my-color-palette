import { useBoundStore } from 'lib/zustand/store';

import ColorPalettes from 'features/ColorPalette/ColorPalettes';
import InfoForm from 'features/Form/InfoForm';
import Preview from 'features/Form/Preview';

export default function Create() {
    const isCollapsed = useBoundStore((state) => state.isCollapsed);

    return (
        <section className="[min-height:calc(100vh-81px)] flex justify-between text-[#11052C]">
            <ColorPalettes />
            <div className={`${isCollapsed ? 'ml-10' : 'ml-[300px]'} w-full p-5 flex flex-col items-center justify-center`}>
                <Preview />
                <InfoForm />
            </div>
        </section>
    );
}