import { PropsBookInfo } from "@/app/types/interface/interfaces";

export default function BookInfos({author, title, description}: PropsBookInfo) {
    return (
        <>
            <h3 className="text-sm font-semibold text-text">{title}</h3>
            <h4 className="text-lg font-bold text-text">{author}</h4>
            <p className="text-sm text-text/80 mt-1 line-clamp-2">{description}</p>
        </>
    );
}