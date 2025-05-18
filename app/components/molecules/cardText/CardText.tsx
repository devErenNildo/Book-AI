import { PropsCardText } from "@/app/types/interface/interfaces";

export default function CardText({ title, text }: PropsCardText) {
    return (
        <>
            <h3 className="text-lg font-semibold mb-2">
                {title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {text}
            </p>
        </>
    );
}