import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import {Divider, Fade, Stack} from "@mui/material";
import {StyledCommentColumnBox, StyledLargeSizeModalBox} from "../boxs/Box.styles";
import {PostHeader} from "../header/postMedia/PostHeader";
import {usePostDetailData} from "../../hooks/UseDataControl";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {OneLineCommentForm} from "../form/OneLineCommentForm";
import {PostCardAction} from "../media/PostCardAction";
import {CommentList} from "../comment/CommentList";
import {BASE_URL} from "../../utils/config";
import {PostDetailCommentPaper} from "../paper/Paper.stayls";
import {PostCardTypoInfo} from "../media/PostCardTypoInfo";
import {MySecondary2} from "../../utils/color-utils";


export const PostDetailsModal = ({open, handleModalClick, post}) => {

   const {data: postDetail, isSuccess} = usePostDetailData(post)


    return (
        <div>
            <Modal
                open={open}
                onClose={handleModalClick}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}
            >
                <Fade in={open}>


                    <Card sx={{display: 'flex'}}>
                        <StyledLargeSizeModalBox>
                            <CardMedia
                                component="img"
                                sx={{maxWidth: '125ch',
                                    minWidth: '46.25ch',
                            }}
                                image={postDetail?.data?.image}
                                alt=""
                            />
                            <StyledCommentColumnBox>
                                <PostDetailCommentPaper>
                                    {isSuccess && <PostHeader underline="none" author={postDetail?.data?.author} modal={true}/>}
                                    {isSuccess && <CommentList
                                        post={postDetail?.data}
                                        url={`${BASE_URL}/comment/parent_comments?c=${postDetail?.data.content_type}&o=${postDetail?.data.id}`}

                                    />}
                                        <Stack sx={{position: 'fixed', bottom: 0, width: '62ch',
                                            // borderTop: 'solid',
                                            // borderWidth: 'thin', borderColor: MySecondary2,
                                            '.&MuiCardActions-root': {marginTop:0}}} >
                                        {isSuccess && <PostCardAction post={postDetail?.data}/>}
                                        {isSuccess && <PostCardTypoInfo post={postDetail?.data}/>}
                                        {isSuccess && <OneLineCommentForm post={postDetail?.data}/>}
                                    </Stack>

                                </PostDetailCommentPaper>
                            </StyledCommentColumnBox>
                        </StyledLargeSizeModalBox>
                    </Card>
                </Fade>
            </Modal>
        </div>
    )
}
