import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';

import CardActions from '@mui/material/CardActions';


import Like from "../../../public/icons/like";
import Comment from "../../../public/icons/comment";
import {PostHeader} from "../../../public/cardHeader/header";


const Post = ({ post }) => {
    return (
        <Card sx={{ maxWidth: 614 }}>
            <PostHeader author={post.author} />
            <CardMedia
                component="img"
                height="614"
                image={ post.image }
                alt="Paella dish"/>
            <CardActions disableSpacing>
                <Like didLike={post} />
                <Comment />
            </CardActions>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    { post.content }
                </Typography>
            </CardContent>

        </Card>
    );
}

export default Post;