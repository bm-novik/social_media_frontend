import Typography from "@mui/material/Typography";
import {StyledCommentModalButton, StyledLikeModalButton} from "../button/Button.styles";
// import {Link} from "@mui/material";
import {Link} from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import {useState} from "react";
import {PostDetailsModal} from "../modalPages/PostDetails.modal.page";
import {timeFromPost} from "../../utils/commonFunk";

export const FeedCardContent = ({post}) => {
    const space = ' '
    const [clickedPost, setClickedPost] = useState(null)
    const [postModalOpen, setPostModalOpen] = useState(false)

    const handlePostModalClick = ({post}) => {
        setClickedPost(post?.id)
        setPostModalOpen(!postModalOpen)
    }

    return (
        <>
            <PostDetailsModal
                open={postModalOpen}
                handleModalClick={handlePostModalClick}
                post={clickedPost}
            />
            <CardContent sx={{paddingTop: '0.5ch', paddingBottom: 2}}>

                {/*Like count LikeModal*/}
                <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'Quicksand', fontSize: '1.85ch',}}>
                    <StyledLikeModalButton
                        variant="text"
                        color='inherit'
                        style={{background: 'transparent', paddingLeft: '0px'}}
                    >
                        {post.like_count} likes
                    </StyledLikeModalButton>
                </Typography>

                {/*Post content -> Navigate to profile*/}
                <Typography variant="body2" sx={{fontFamily: 'Quicksand', fontSize: '1.85ch', color: "black"}}>
                    <Link to={`/${post.author.id}`}
                          onClick={() => console.log(`${post.author.id}`)}
                          style={{
                              textDecoration: 'none',
                              cursor: 'pointer',
                              color: 'inherit',
                              fontWeight: 600
                          }}>
                        {/*TODO nickName*/}
                        {post.author.profile.first_name}{space}
                    </Link>
                    {post.content}
                </Typography>

                {/*Comments count -> Open PostDetailModal*/}
                <Typography variant="body2" color="text.secondary" sx={{}}>
                    <StyledCommentModalButton
                        variant="text"
                        color='inherit'
                        style={{background: 'transparent'}}
                        onClick={() => handlePostModalClick({post})}
                    >
                        View all {post.comment_count} comments
                    </StyledCommentModalButton>
                </Typography>

                {/* Date publish -> No action*/}
                <Typography variant="body2" sx={{fontFamily: 'Quicksand', fontSize: '1.3ch', color: "MySecondary",}}>
                    {timeFromPost(post.date_created)}
                </Typography>

            </CardContent>
        </>
    );
};
