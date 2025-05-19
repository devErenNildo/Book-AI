import { PropsCardBook } from "@/app/types/interface/interfaces";
import BookInfos from "../../atoms/book/BookInfos";
import BookTags from "./BookTags";
import Like from "../../atoms/book/Like";

export default function CardBook({
    id,
    title,
    author,
    description,
    coverURL,
    likes,
    tags = [],
}: PropsCardBook) {
    <div className="flex gap-4 p-4 rounded-xl text-white bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 shadow-md w-full max-w-3xl">
        <img
            src={coverURL}
            alt={title}
            className="w-24 h-36 object-cover rounded-md border border-white"
        />

        <div className="flex-1">
            <BookInfos author={author} title={title} description={description} />

            <BookTags tags={tags} />

            <Like likes={likes} />
        </div>
    </div>
}