import { useBoundStore } from 'lib/zustand/store';

import ColorPalettes from 'features/ColorPalette/ColorPalettes';
import InfoForm from 'features/Form/InfoForm';
import Preview from 'features/Form/Preview';

export default function Create() {
    const isCollapsed = useBoundStore((state) => state.isCollapsed);

    return (
        <section className="flex justify-between text-[#11052C] [min-height:calc(100vh-81px)]">
            <ColorPalettes />
            <div className={`${isCollapsed ? 'ml-10' : 'ml-[300px]'} flex w-full flex-col items-center justify-center p-5`}>
                <Preview />
                <InfoForm />
            </div>
        </section>
    );
}
