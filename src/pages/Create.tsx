import { KeyboardEvent, MouseEvent, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { generateColors, HEX, neutralColors, OPACITY } from 'utils';

export default function Create() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const [colors, setColors] = useState<string[]>([]);
    const [hexColors, setHexColors] = useState<string[]>([]);

    const [hue, setHue] = useState(258);
    const [saturation, setSaturation] = useState(80);
    const [lightness, setLightness] = useState(10);

    const [selected, setSelected] = useState('hsla(258deg, 80%, 10%, 1)');
    const [selectedHex, setSelectedHex] = useState('11052C');

    const onClick = (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>, color: string) => {
        const rgb = e.currentTarget.style.backgroundColor;
        const isRGBA = rgb.includes('rgb(') ? false : true;
        const rgbArray = rgb.includes('rgb(') ? rgb.replace('rgb(', '').replace(')', '').split(', ') : rgb.replace('rgba(', '').replace(')', '').split(', ');

        const hexCode = Array.from([0, 0, 1, 1, 2, 2, 3]).reduce((prev, cur, index) => {
            const divided = Number(rgbArray[cur]) / 16;
            const remainder = Number(rgbArray[cur]) % 16;
            const converted = Math.floor(index % 2 === 0 ? divided : remainder);

            let rgbToHex = '';
            if (cur === 3 && isRGBA) {
                rgbToHex = prev + OPACITY[Number(rgbArray[3].replace('0.', '')) - 1];
            } else if (cur === 3) {
                return prev;
            } else {
                rgbToHex = `${prev}${converted > 9 ? HEX[converted] : converted}`;
            }
            return rgbToHex;
        }, '');

        setSelectedHex(`#${hexCode}`);

        const rgba = color.split('(')[1].split(')')[0].split(',');
        setSelected(color);
        setHue(Number(rgba[0].replace('deg', '')));
        setSaturation(Number(rgba[1].replace('%', '')));
        setLightness(Number(rgba[2].replace('%', '')));
    };

    const handleSelect = () => {
        setColors((prev) => [...prev, selected]);
        setHexColors((prev) => [...prev, selectedHex]);
    };

    const handleReset = () => setColors([]);

    const handleSave = () => {
        if (hexColors.length) {
            const prev = JSON.parse(localStorage.getItem('colors') || '[]');
            const newColors = [...prev, { name: name || 'MY COLOR PALETTE', colors: hexColors }];
            localStorage.setItem('colors', JSON.stringify(newColors));
            navigate('/');
        } else {
            alert('색상을 하나 이상 선택해 주세요!');
        }
    };

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
                                        onClick={(e) => onClick(e, color)}
                                        onKeyDown={(e) => onClick(e, color)}
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
                                        onClick={(e) => onClick(e, color)}
                                        onKeyDown={(e) => onClick(e, color)}
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
                                        onClick={(e) => onClick(e, `hsla(${hue}deg, ${saturation}%, ${value}%, 1)`)}
                                        onKeyDown={(e) => onClick(e, `hsla(${hue}deg, ${saturation}%, ${value}%, 1)`)}
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
                                        onClick={(e) => onClick(e, `hsla(${hue}deg, ${saturation}%, ${lightness}%, ${((index + 1) * 10) / 100})`)}
                                        onKeyDown={(e) => onClick(e, `hsla(${hue}deg, ${saturation}%, ${lightness}%, ${((index + 1) * 10) / 100})`)}
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
                            <button className="mt-10 border rounded-md border-[#11052C] px-[5px] font-mono font-bold uppercase text-[18px]" type="button" onClick={handleReset}>
                                Reset
                            </button>
                            <button className="mx-2.5 border rounded-md border-[#11052C] px-[5px] font-mono font-bold uppercase text-[18px]" type="button" onClick={handleSelect}>
                                Select
                            </button>
                            <button className="border rounded-md border-[#11052C] px-[5px] font-mono font-bold uppercase text-[18px]" type="button" onClick={handleSave}>
                                Save
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
                                    {colors?.map((color, index) => (
                                        <li style={{ backgroundColor: color }} key={color} className="group w-full h-full flex items-end ">
                                            <span className="w-full text-[10px] font-bold text-[#FAF4FF] bg-[#0000004d] p-[5px]">{hexColors[index]}</span>
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
