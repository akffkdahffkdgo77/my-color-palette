import { FormEvent, KeyboardEvent, MouseEvent, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { DefaultColorPalette, NeutralColorPalette, OpacityColorPalette, PalettePreview, SimilarColorPalette, Form } from 'components';
import { convertToHex, OPACITY } from 'utils';

// TODO: Context API
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
    const [selectedInputValue, setSelectedInputValue] = useState({ color: '', index: 0 });

    const handleClick = (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>, color: string) => {
        const rgb = e.currentTarget.style.backgroundColor;
        const isRGBA = !rgb.includes('rgb(');
        const rgbArray = rgb.includes('rgb(') ? rgb.replace('rgb(', '').replace(')', '').split(', ') : rgb.replace('rgba(', '').replace(')', '').split(', ');

        const hexCode = Array.from(Array(isRGBA ? 4 : 3)).reduce((prev, cur, index) => {
            let rgbToHex = '';
            if (index === 3) {
                rgbToHex = prev + OPACITY[Number(rgbArray[3].replace('0.', '')) - 1];
            } else {
                rgbToHex = `${prev}${convertToHex(rgbArray[index])}`;
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

    const handleReset = () => setColors([]);

    const handleSelect = () => {
        setColors((prev) => [...prev, selected]);
        setHexColors((prev) => [...prev, selectedHex]);
        setSelected('hsla(258deg, 80%, 10%, 1)');
        setSelectedHex('11052C');
    };

    const handleSave = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (hexColors.length) {
            const prev = JSON.parse(localStorage.getItem('colors') || '[]');
            const newColors = [...prev, { name: name || 'MY COLOR PALETTE', colors: hexColors }];
            localStorage.setItem('colors', JSON.stringify(newColors));
            navigate('/');
        } else {
            // eslint-disable-next-line no-alert
            alert('색상을 하나 이상 선택해 주세요!');
        }
    };

    const handleColorChange = (e: FormEvent<HTMLInputElement>, index: number) => setSelectedInputValue({ color: e.currentTarget.value, index });

    return (
        <main style={{ backgroundColor: selected }} className="w-full min-h-screen">
            <section className="h-screen">
                <div className="h-screen flex justify-between text-[#11052C]">
                    <div className="fixed overflow-y-auto bg-white h-full w-[500px] p-5">
                        <h2 className="sticky top-0 text-2xl w-full text-center font-mono uppercase mb-5 font-bold">Create Palette</h2>
                        <div>
                            <DefaultColorPalette onClick={handleClick} />
                            <NeutralColorPalette onClick={handleClick} />
                            <SimilarColorPalette hue={hue} saturation={saturation} onClick={handleClick} />
                            <OpacityColorPalette hue={hue} saturation={saturation} lightness={lightness} onClick={handleClick} />
                            <Form setName={setName} onSave={handleSave} onReset={handleReset} onSelect={handleSelect} />
                        </div>
                    </div>
                    <div className="w-full ml-[500px] p-5 flex items-center justify-center flex-col">
                        <Link to="/">
                            <h1 className="w-full text-center text-5xl mb-10 font-bold underline text-[#FAF4FF]">My Color Palette</h1>
                        </Link>
                        <div className="flex flex-col w-full border border-[#11052C] rounded-md overflow-hidden">
                            <PalettePreview
                                colors={colors}
                                setColors={setColors}
                                hexColors={hexColors}
                                setHexColors={setHexColors}
                                selectedInputValue={selectedInputValue}
                                setSelectedInputValue={setSelectedInputValue}
                                onColorChange={handleColorChange}
                            />
                            <h3 className="text-[24px] text-center font-mono border-t border-[#11052C] text-black font-bold p-5 bg-white rounded-md rounded-t-none">{name}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
