import { useEffect } from 'react';

import ColorsList from 'components/ColorsList';

const colors = [
    {
        name: 'Rainbow',
        colors: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#6366f1', '#a855f7']
    },
    {
        name: 'Pink',
        colors: ['#e91e63', '#e91e63e6', '#e91e63cc', '#e91e63b3', '#e91e6399', '#e81f6280', '#e81f6266', '#e81f624d', '#e81f6233', '#e81f621a']
    },
    {
        name: 'Blue',
        colors: ['#2196f3', '#2196f3e6', '#2196f3cc', '#2196f3b3', '#2196f399', '#2196f380', '#2196f366', '#2196f34d', '#2196f333', '#2196f31a']
    }
];

export default function Home() {
    const myColors: { name: string; colors: string[] }[] = JSON.parse(localStorage.getItem('colors') || JSON.stringify('')) || colors;

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('colors') || '[]')?.length) {
            localStorage.setItem('colors', JSON.stringify(colors));
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
