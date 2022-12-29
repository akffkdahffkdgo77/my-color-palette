import { IOpacityColorPalette } from 'components/OpacityColorPalette/types';

export default function OpacityColorPalette({ hue, saturation, lightness, onClick }: IOpacityColorPalette) {
    return (
        <>
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
        </>
    );
}
