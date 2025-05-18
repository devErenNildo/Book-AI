import { BsArrowUpRight } from "react-icons/bs";

export default function CardArrow() {
    return (
        <div className="absolute top-6 right-6">
            <div
                className="
                    w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center
                    transition-transform duration-300 group-hover:rotate-45
                "
            >
                <BsArrowUpRight className="text-white" />
            </div>
        </div>
    );
}