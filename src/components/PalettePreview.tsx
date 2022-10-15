interface IProps {
    colors: string[];
    hexColors: string[];
}

export default function PalettePreview({ hexColors, colors }: IProps) {
    return (
        <div className="p-5 pb-0 bg-white min-w-[500px] rounded-b-none">
            <ul className="w-full h-[300px] rounded-md border-[#FAF4FF] flex">
                {colors?.map((color, index) => (
                    <li style={{ backgroundColor: color }} key={color} className="group w-full h-full flex items-end ">
                        <span className="w-full text-[10px] font-bold text-[#FAF4FF] bg-[#0000004d] p-[5px]">{hexColors[index]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
