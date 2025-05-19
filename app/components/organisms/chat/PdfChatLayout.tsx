import PdfViewer from "./PdfViewer";
import ChatBox from "./ChatBox";

interface PdfChatLayoutProps {
    pdfUrl: string | null;
    messages: any[];
    newMessage: string;
    setNewMessage: (val: string) => void;
    sendMessage: () => void;
}

export default function PdfChatLayout({
    pdfUrl,
    messages,
    newMessage,
    setNewMessage,
    sendMessage,
}: PdfChatLayoutProps) {
    return (
        <main className="w-full flex min-h-screen bg-background text-text">
            <PdfViewer url={pdfUrl} />
            <ChatBox
                messages={messages}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                onSend={sendMessage}
            />
        </main>
    );
}
