import { PropsBookTags } from "@/app/types/interface/interfaces";
import Tags from "../../atoms/book/Tags";

export default function BookTags({ tags }: PropsBookTags) {
    return (
        tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                    <Tags tags={tag} key={index} />
                ))}
            </div>
        )
    );
}