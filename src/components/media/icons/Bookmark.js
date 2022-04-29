import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import IconButton from "@mui/material/IconButton";

export const Bookmark = ({ post }) => {
 return (
     <IconButton
         size="large"
         onClick={() => console.log('Bookmark Click future implementation')}
     >
         <BookmarkBorderOutlinedIcon />
     </IconButton>
 );
};

