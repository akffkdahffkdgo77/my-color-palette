import { useState } from 'react';

import { Link } from 'react-router-dom';

function neutralColors() {
    return Array.from(Array(21)).map((_, index) => `hsla(0deg, 0%, ${index * 5}%, 1)`);
}

function generateColors() {
    const red = Array.from(Array(20)).map((_, index) => `hsla(${index * 3}deg, 100%, 50%, 1)`); // 0deg, 100%, 50% -> 57deg, 100%, 50%
    const green = Array.from(Array(21)).map((_, index) => `hsla(${60 + index * 3}deg, 100%, 50%, 1)`); // 60deg, 100%, 50% -> 120deg, 100%, 50%
    const blue = Array.from(Array(20)).map((_, index) => `hsla(${120 + (index + 1) * 3}deg, 100%, 50%, 1)`); // 123deg, 100%, 50% -> 180deg, 100%, 50%
    const purple = Array.from(Array(20)).map((_, index) => `hsla(${180 + (index + 1) * 3}deg, 100%, 50%, 1)`); // 183deg, 100%, 50% -> 240deg, 100%, 50%
    const pink = Array.from(Array(20)).map((_, index) => `hsla(${240 + (index + 1) * 3}deg, 100%, 50%, 1)`); // 243deg, 100%, 50% -> 300deg, 100%, 50%
    const last = Array.from(Array(19)).map((_, index) => `hsla(${300 + (index + 1) * 3 === 360 ? 0 : 300 + (index + 1) * 3}deg, 100%, 50%, 1)`); // 300deg, 100%, 50% -> 360deg, 100%, 50%
    return [...red, ...green, ...blue, ...purple, ...pink, ...last];
}

export default function Create() {
    const [name, setName] = useState('');
    const [colors, setColors] = useState<string[]>([]);
    const [selected, setSelected] = useState('hsla(258deg, 80%, 10%, 1)');
    const [hue, setHue] = useState(0);
    const [saturation, setSaturation] = useState(0);
    const [lightness, setLightness] = useState(0);

    const onClick = (color: string) => {
        const rgba = color.split('(')[1].split(')')[0].split(',');
        setSelected(color);
        setHue(Number(rgba[0].replace('deg', '')));
        setSaturation(Number(rgba[1].replace('%', '')));
        setLightness(Number(rgba[2].replace('%', '')));
    };

    const handleSelect = () => setColors((prev) => [...prev, selected]);

    const handleReset = () => setColors([]);

    // TODO: LocalStorage에 저장하기

    return (
        <main style={{ backgroundColor: selected }} className="w-full min-h-screen">
            <section className="h-screen">
                <div className="h-screen flex justify-between text-[#11052C]">
                    <div className="bg-white h-full w-[500px] p-5">
                        <h2 className="text-2xl w-full text-center font-mono uppercase mb-5 font-bold">Create Palette</h2>
                        <div>
                            <h3 className="text-lg font-mono font-bold uppercase">Color</h3>
                            <div className="w-full flex items-center justify-center my-5 gap-[5px] flex-wrap">
                                {generateColors().map((color, index) => (
                                    <div
                                        aria-label={color}
                                        title={color}
                                        role="button"
                                        tabIndex={0}
                                        key={index}
                                        style={{ backgroundColor: color }}
                                        className="w-[25px] h-[25px] rounded-full border border-slate-600"
                                        onClick={() => onClick(color)}
                                        onKeyDown={() => onClick(color)}
                                    />
                                ))}
                            </div>
                            <div className="w-full flex items-center justify-start my-5 gap-x-[5px] gap-y-2.5 flex-wrap">
                                {neutralColors().map((color, index) => (
                                    <div
                                        key={index}
                                        aria-label={color}
                                        title={color}
                                        role="button"
                                        tabIndex={0}
                                        style={{ backgroundColor: color }}
                                        className="w-[35px] h-[35px] rounded-full border border-slate-600"
                                        onClick={() => onClick(color)}
                                        onKeyDown={() => onClick(color)}
                                    />
                                ))}
                            </div>
                            <h3 className="text-lg font-mono font-bold uppercase">Similar</h3>
                            <div className="flex items-center gap-x-[5px] my-5">
                                {[90, 70, 50, 30, 20].map((value, index) => (
                                    <div
                                        key={index}
                                        aria-label={`lightness-${value}%`}
                                        title={`lightness-${value}%`}
                                        role="button"
                                        tabIndex={0}
                                        className="w-full h-5 border-2 border-[#11052C]"
                                        style={{ backgroundColor: `hsl(${hue}deg, ${saturation}%, ${value}%)` }}
                                        onClick={() => onClick(`hsla(${hue}deg, ${saturation}%, ${value}%, 1)`)}
                                        onKeyDown={() => onClick(`hsla(${hue}deg, ${saturation}%, ${value}%, 1)`)}
                                    />
                                ))}
                            </div>
                            <h3 className="text-lg font-mono font-bold uppercase">Opacity</h3>
                            <div className="flex items-center gap-x-[5px] my-5">
                                {Array.from(Array(9)).map((_, index) => (
                                    <div
                                        key={index}
                                        aria-label={`opacity-${((index + 1) * 10) / 100}%`}
                                        title={`opacity-${((index + 1) * 10) / 100}%`}
                                        role="button"
                                        tabIndex={0}
                                        className="w-[50px] h-5 border-2 border-[#11052C]"
                                        style={{ backgroundColor: `hsla(${hue}deg, ${saturation}%, ${lightness}%, ${((index + 1) * 10) / 100})` }}
                                        onClick={() => onClick(`hsla(${hue}deg, ${saturation}%, ${lightness}%, ${((index + 1) * 10) / 100})`)}
                                        onKeyDown={() => onClick(`hsla(${hue}deg, ${saturation}%, ${lightness}%, ${((index + 1) * 10) / 100})`)}
                                    />
                                ))}
                            </div>
                            <label htmlFor="name" className="flex flex-col text-[10px]">
                                <p className="hidden">NAME</p>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    maxLength={20}
                                    placeholder="Enter the name of Palette"
                                    className="text-[16px] p-2.5 rounded-md border border-[#11052C] focus:outline-dashed focus:outline-1 focus:outline-[#11052C]"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <button className="mt-10 border rounded-md border-[#11052C] px-[5px] font-mono font-bold uppercase mr-2.5 text-[18px]" type="button" onClick={handleReset}>
                                Reset
                            </button>
                            <button className="border rounded-md border-[#11052C] px-[5px] font-mono font-bold uppercase text-[18px]" type="button" onClick={handleSelect}>
                                Select
                            </button>
                        </div>
                    </div>
                    <div className="w-full p-5 flex items-center justify-center flex-col">
                        <Link to="/">
                            <h1 className="w-full text-center text-5xl mb-10 font-bold underline text-[#FAF4FF]">My Color Palette</h1>
                        </Link>
                        <div className="flex flex-col w-full border border-[#11052C] rounded-md overflow-hidden">
                            <div className="p-5 pb-0 bg-white min-w-[500px] rounded-b-none">
                                <ul className="w-full h-[300px] rounded-md border-[#FAF4FF] flex">
                                    {colors?.map((color) => (
                                        <li style={{ backgroundColor: color }} key={color} className="group w-full h-full flex items-end ">
                                            <span className="w-full text-[10px] font-bold text-[#FAF4FF] bg-[#0000004d] p-[5px]">{`hsl(${color.split('hsla(')[1].replace('%, 1)', '')})`}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <h3 className="text-[24px] text-center font-mono border-t border-[#11052C] text-black font-bold p-5 bg-white rounded-md rounded-t-none">{name}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
