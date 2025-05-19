import { useRef, useEffect } from "react";
import MessageBubble from "../../molecules/chat/MessageBubble";
import ChatInput from "../../molecules/chat/ChatInput";

interface ChatBoxProps {
    messages: {
        id: string;
        senderName: string;
        senderPhoto: string;
        message: string;
    }[];
    newMessage: string;
    setNewMessage: (value: string) => void;
    onSend: () => void;
}

export default function ChatBox({ messages, newMessage, setNewMessage, onSend }: ChatBoxProps) {
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="w-1/2 p-4 flex flex-col justify-between bg-[#141421]">
            <div className="overflow-y-auto h-[80vh] pr-2 space-y-4">
                <h2 className="text-lg font-bold mb-4 text-purple-400">Discussão</h2>
                {messages.map((msg) => (
                    <MessageBubble
                        key={msg.id}
                        name={msg.senderName}
                        photo={msg.senderPhoto}
                        text={msg.message}
                    />
                ))}
                <div ref={chatEndRef} />
            </div>

            <ChatInput
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onSend={onSend}
            />
        </div>
    );
}
