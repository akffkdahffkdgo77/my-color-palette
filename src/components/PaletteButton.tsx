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
            className={`${size === 'small' ? 'h-[25px] w-[25px]' : size === 'large' ? 'h-[35px] w-[35px]' : ''} ${
                variant === 'rounded' ? 'rounded-full border border-slate-600' : 'h-5 w-full border-2 border-[#11052C]'
            }`}
            onClick={(e) => onClick(e.currentTarget.style.backgroundColor, color)}
            onKeyDown={(e) => onClick(e.currentTarget.style.backgroundColor, color)}
        />
    );
}
