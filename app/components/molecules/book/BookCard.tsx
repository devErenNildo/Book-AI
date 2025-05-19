import BookInfos from "../../atoms/book/BookInfos";
import BookTags from "./BookTags";
import Like from "../../atoms/book/Like";
import Link from "next/link";

interface BookCardProps {
    id: string
    title: string;
    author: string;
    description: string;
    coverURL: string;
    likes: number;
    tags?: string[];
}

export default function BookCard({
    id,
    title,
    author,
    description,
    coverURL,
    likes,
    tags = [],
}: BookCardProps) {
    return (
        <Link href={`/pdf/${id}/chat`} className="w-full max-w-3xl p-[2px] rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 shadow-md">
            <div className="flex gap-4 p-4 rounded-[10px] bg-foreground text-text">
                {/* Capa */}
                <img
                    src={coverURL}
                    alt={title}
                    className="w-24 h-36 object-cover rounded-md border border-text"
                />

                {/* Info */}
                <div className="flex-1">
                    <BookInfos author={author} title={title} description={description} />
                    <BookTags tags={tags} />
                    <Like likes={likes} />
                </div>
            </div>
        </Link>

    );
}
