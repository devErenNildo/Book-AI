import { PropsLikes } from "@/app/types/interface/interfaces";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FaHeart } from "react-icons/fa";

export default function Like({ likes }: PropsLikes) {
    return (
        // <div className="flex items-center gap-2 mt-4">
        //     <FaHeart className="text-pink-300" />
        //     <span className="text-sm">{likes}</span>
        // </div>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton aria-label="add to favorites" size="small" sx={{ color: '#f9a8d4', p: 0.5 }}>
                <FavoriteIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2" color="text.secondary">{likes}</Typography>
        </Box>
    );
}