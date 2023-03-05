import type { SimilarColorPalettePropsType } from 'components/SimilarColorPalette/types';

export default function SimilarColorPalette({ hue, saturation, onClick }: SimilarColorPalettePropsType) {
    return (
        <>
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
        </>
    );
}
