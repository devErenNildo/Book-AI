import { HeadingProps } from "@/app/types/interface/interfaces";

export default function Heading({ text, highlight }: HeadingProps) {
    return (
        <h1 className="text-4xl font-bold text-text leading-tight text-center md:text-start">
            {text}
            <span className="bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent">
                {highlight}
            </span>
        </h1>
    );
}