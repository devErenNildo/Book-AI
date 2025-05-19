interface TextInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
export default function TextInput({ value, onChange, placeholder }: TextInputProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="mt-1 w-full p-2 rounded bg-background text-text border border-purple-700"
        />
    );
}
