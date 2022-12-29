import { useEffect } from 'react';

import { ColorsList } from 'components';
import { COLORS } from 'utils';

export default function Home() {
    const myColors: { name: string; colors: string[] }[] = JSON.parse(localStorage.getItem('colors') || JSON.stringify('')) || COLORS;

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('colors') || '[]')?.length) {
            localStorage.setItem('colors', JSON.stringify(COLORS));
        }
    }, []);

    return (
        <main className="w-full min-h-screen bg-[#11052C] p-10 flex flex-col items-center justify-center">
            <h1 className="w-full text-center text-5xl mb-10 font-bold underline text-[#FAF4FF]">My Color Palette</h1>
            <section className="max-w-5xl mx-auto">
                <div className="flex flex-wrap gap-5 items-center">
                    {myColors?.map(({ name, colors }) => (
                        <ColorsList key={name} name={name} colors={colors} />
                    ))}
                </div>
            </section>
        </main>
    );
}
