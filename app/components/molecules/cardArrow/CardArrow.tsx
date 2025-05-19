import { BsArrowUpRight } from "react-icons/bs";

export default function CardArrow() {
    return (
        <div className="absolute top-6 right-6">
            <div
                className="
                    w-10 h-10 rounded-full bg-background/80 flex items-center justify-center
                    transition-transform duration-300 group-hover:rotate-45 group-hover:bg-gradient-to-r from-pink-500 to-purple-500
                "
            >
                <BsArrowUpRight className="text-text" />
            </div>
        </div>
    );
}