import { PropsLikes } from "@/app/types/interface/interfaces";
import { FaHeart } from "react-icons/fa";

export default function Like({likes}: PropsLikes) {
    return (
        <div className="flex items-center gap-2 mt-4">
            <FaHeart className="text-pink-300" />
            <span className="text-sm">{likes}</span>
        </div>
    );
}