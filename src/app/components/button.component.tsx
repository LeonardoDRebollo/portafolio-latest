interface ButtonProps {

    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    disabled?: boolean;
}

export default function Button({  onClick, type, className, disabled }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={className}
            disabled={disabled}
        >
          Ver más
        </button>
    );
}