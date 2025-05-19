interface ButtonProps {
    onClick: () => void;
    disabled: boolean;
    loading: boolean;
    children: string;
}
export default function ButtonInput({ onClick, disabled, loading, children }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-bold py-2 rounded-lg hover:opacity-90 transition"
        >
            {loading ? "Enviando..." : children}
        </button>
    );
}
