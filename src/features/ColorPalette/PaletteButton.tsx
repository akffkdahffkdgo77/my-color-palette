type PaletteButtonType = {
    color: string;
    size: string;
    variant: string;
    onClick: (rgb: string, color: string) => void;
};

export default function PaletteButton({ color, size, variant, onClick }: PaletteButtonType) {
    return (
        <div
            aria-label={color}
            title={color}
            role="button"
            tabIndex={0}
            style={{ backgroundColor: color }}
            className={`${size === 'small' ? 'w-[25px] h-[25px]' : size === 'large' ? 'w-[35px] h-[35px]' : ''} ${
                variant === 'rounded' ? 'rounded-full border border-slate-600' : 'w-full h-5 border-2 border-[#11052C]'
            }`}
            onClick={(e) => onClick(e.currentTarget.style.backgroundColor, color)}
            onKeyDown={(e) => onClick(e.currentTarget.style.backgroundColor, color)}
        />
    );
}
