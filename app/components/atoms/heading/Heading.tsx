import { HeadingProps } from "@/app/types/interface/interfaces";

export default function Heading({ text, highlight }: HeadingProps) {
    return (
        <h1 className="text-4xl font-bold text-text leading-tight">
            {text}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {highlight}
            </span>
        </h1>
    );
}