import { PropsBookTag } from "@/app/types/interface/interfaces";
import { Box } from "@mui/material";

export default function Tags({ tags, tag }: PropsBookTag) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <span className="bg-text/10 text-xs px-2 py-1 rounded-full text-text">
                {tag && "#"} {tags}
            </span>
        </Box>
        // <span
        //     className="text-xs bg-text/10 text-text px-3 py-1 rounded-full border border-text/20 font-medium"
        // >
        //     {tag && "#"} {tags}
        // </span>
    );
}