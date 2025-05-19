import InputChat from "../../atoms/chat/InputChat";
import BtnChat from "../../atoms/chat/BtnChat";

interface ChatInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSend: () => void;
}

export default function ChatInput({ value, onChange, onSend }: ChatInputProps) {
    return (
        <div className="mt-4 flex gap-2">
            <InputChat value={value} onChange={onChange} placeholder="Escreva sua mensagem..." />
            <BtnChat onClick={onSend}>Enviar</BtnChat>
        </div>
    );
}
