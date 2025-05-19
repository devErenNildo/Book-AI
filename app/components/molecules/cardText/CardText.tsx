import { PropsCardText } from "@/app/types/interface/interfaces";

export default function CardText({ title, text }: PropsCardText) {
    return (
        <>
            <h3 className="text-lg font-semibold mb-2 text-text">
                {title}
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-text/70">
                {text}
            </p>
        </>
    );
}