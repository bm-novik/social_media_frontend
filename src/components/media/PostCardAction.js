import {Like} from "./icons/like";
import {Comment} from "./icons/comment";
import {Share} from "./icons/share";
import Box from "@mui/material/Box";
import {Bookmark} from "./icons/Bookmark";
import CardActions from "@mui/material/CardActions";

export const PostCardAction = ({ post }) => {
 return (
     <CardActions
         spacing={2}
         // disableSpacing
        sx={{paddingLeft: '2ch',  marginTop: '1.5ch', spacing: 2, }}
     >
      <Like object={post} did_like={post?.did_like}/>
      <Comment post={post}/>
      <Share post={post}/>
      <Box sx={{flexGrow: 1}}/>
      <Bookmark />
     </CardActions>
 );
};
