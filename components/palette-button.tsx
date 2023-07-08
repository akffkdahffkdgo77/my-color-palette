import cn from 'classnames';

type PaletteButtonType = {
    color: string;
    size: 'large' | 'small' | '';
    variant: 'rounded' | 'square';
    onClick: (rgb: string, color: string) => void;
};

function getStyle(type: string) {
    switch (type) {
        case 'small':
            return 'h-[25px] w-[25px]';
        case 'large':
            return 'h-[35px] w-[35px]';
        case 'rounded':
            return 'rounded-full border border-slate-600';
        case 'square':
            return 'h-5 w-full border-2 border-[#11052C]';
        default:
            return '';
    }
}

export default function PaletteButton({ color, size, variant, onClick }: PaletteButtonType) {
    return (
        <div
            aria-label={color}
            title={color}
            role="button"
            tabIndex={0}
            style={{ backgroundColor: color }}
            className={cn(getStyle(size), getStyle(variant))}
            onClick={(e) => onClick(e.currentTarget.style.backgroundColor, color)}
            onKeyDown={(e) => onClick(e.currentTarget.style.backgroundColor, color)}
        />
    );
}
