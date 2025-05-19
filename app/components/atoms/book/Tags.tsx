import { PropsBookTag } from "@/app/types/interface/interfaces";

export default function Tags({ tags }: PropsBookTag) {
    return (
        <span
            className="text-xs bg-text/10 text-text px-3 py-1 rounded-full border border-text/20 font-medium"
        >
            #{tags}
        </span>
    );
}