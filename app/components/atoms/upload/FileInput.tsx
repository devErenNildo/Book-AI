interface FileInputProps {
    accept: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function FileInput({ accept, onChange }: FileInputProps) {
    return <input type="file" accept={accept} onChange={onChange} className="mt-1 block w-full" />;
}
