interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export default function InputChat({ value, onChange, placeholder }: InputProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="flex-1 p-2 rounded bg-[#222232] text-white border border-purple-600"
        />
    );
}
