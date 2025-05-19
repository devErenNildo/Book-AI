interface ButtonProps {
    onClick: () => void;
    children: string;
}

export default function BtnChat({ onClick, children }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded text-white font-bold"
        >
            {children}
        </button>
    );
}
