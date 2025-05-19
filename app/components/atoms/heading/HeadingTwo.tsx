import { HeadingProps } from "@/app/types/interface/interfaces";

export default function HeadingTwo({ highlight, text }: HeadingProps) {
    return (
        <h2 className="text-2xl font-bold mb-3 text-text">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
               { highlight }
            </span>
            {text}
        </h2>
    );
}