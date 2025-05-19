interface TextAreaProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function TextArea({ value, onChange }: TextAreaProps) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            rows={4}
            className="mt-1 w-full p-2 rounded bg-background text-text border border-purple-700"
        />
    );
}
