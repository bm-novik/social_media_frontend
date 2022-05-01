import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import {PostDetailsModal} from "../../modalPages/PostDetails.modal.page";

export const Comment = ({post}) => {
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
            <IconButton
                size="large"
                color="inherit"
                onClick={() => handlePostModalClick({post})}
            >
                <MapsUgcOutlinedIcon/>
            </IconButton>
        </>
    );
};

