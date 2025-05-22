import { PropsBookInfo } from "@/app/types/interface/interfaces";
import { Typography } from "@mui/material";

export default function BookInfos({ author, title, description }: PropsBookInfo) {
    return (
        <>
            {/* <h3 className="text-sm font-semibold text-text">{title}</h3>
            <h4 className="text-lg font-bold text-text">{author}</h4>
            <p className="text-sm text-text/80 mt-1 line-clamp-2">{description}</p> */}
            <Typography component="div" variant="subtitle2" fontWeight="bold" color="var(--text)">
                {title}
            </Typography>
            <Typography component="div" variant="h6" fontWeight="bold" color='var(--text)'>
                {author}
            </Typography>
            <Typography
                variant="body2"
                sx={{ mb: 1, color: 'var(--text)' }}
            >
                {description}
            </Typography>
        </>
    );
}