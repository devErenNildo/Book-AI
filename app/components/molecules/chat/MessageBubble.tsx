import AvatarImage from "../../atoms/user/AvatarImage";

interface MessageProps {
    name: string;
    photo: string;
    text: string;
}

export default function MessageBubble({ name, photo, text }: MessageProps) {
    return (
        <div className="flex items-start gap-3">
            <AvatarImage src={photo} alt={name} width={20} height={20} />
            <div>
                <p className="text-sm font-bold">{name}</p>
                <p className="text-sm text-white/80">{text}</p>
            </div>
        </div>
    );
}
