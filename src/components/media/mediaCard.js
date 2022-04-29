import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {PostHeader} from "../header/postMedia/PostHeader";
import {OneLineCommentForm} from "../form/OneLineCommentForm";
import {FeedCardContent} from "./FeedCardContent";
import {PostCardAction} from "./PostCardAction";


export const Post = ({ post }) => {

    return (
        <Card sx={{maxWidth: '77ch', mb: 5, marginRight: '10ch'}}>
            <PostHeader underline="none" author={post.author}/>
            <CardMedia
                onClick={() => console.log('post detail modal')}
                component="img"
                height="614"
                width="614"
                image={post.image}
                alt=""/>
            <PostCardAction post={post}/>
            <FeedCardContent post={post} />
           <OneLineCommentForm post={ post }/>
        </Card>
    )
}
