import ImageList from "@mui/material/ImageList";
import {StyledProfileImageItemList, StyledProfileImageListItem} from "./List.styles";
import { StyledImageTextBox } from "../boxs/Box.styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import Box from "@mui/material/Box";
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useSetRecoilState} from "recoil";
import {addActiveSelector} from "../../recoil/atom/addAtom";


export const ProfilePageImageList = ({group, handleModalClick}) => {
    const setAddNavbar = useSetRecoilState(addActiveSelector)
    return (
        <>
            {/* List is empty == No post to show */}
            {group?.length === 0 ?
                <Card
                    onClick={setAddNavbar}
                    sx={{ display: 'flex', height: '47.5ch', cursor:'pointer' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '47.5ch' }}
                        image="/profile-no-post-grid.png"
                        alt="profile-no-post"
                    />

                    <Box sx={{ flexDirection: 'column', display: 'flex'}}>
                        <CardContent
                            sx={{
                                flex: '1 0 auto', alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                alignContent: 'center', display:'flex'
                        }}>
                            <Typography component="div" variant="h5">
                                Start capturing and sharing your moments.
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Press Here to share your first today
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
                :
                // List is not empty
                <ImageList sx={{width: "100%", height: '100%', justifyItems: 'center'}} cols={3} gap={24}>
                    {group?.map((post) => (
                        <StyledProfileImageItemList
                            key={post.id}
                            value={post}
                            onClick={() => {
                                handleModalClick({post})
                            }}>
                            <img
                                sx={{display: 'block', width: '100%', height: 'auto%'}}
                                src={`${post.image}?w=293&h=293&fit=crop&auto=format`}
                                srcSet={`${post.image}?w=293&h=293&fit=crop&auto=format&dpr=2 2x`}
                                alt={post.content}
                                loading="lazy"
                            />
                            <StyledProfileImageListItem container>
                                <StyledImageTextBox component="span">
                                    <FavoriteIcon sx={{marginRight: '0.5ch'}} /> {post.like_count}
                                </StyledImageTextBox>
                                <StyledImageTextBox component="span">
                                    <ChatBubbleOutlinedIcon sx={{marginRight: '0.5ch'}} /> {post.comment_count}
                                </StyledImageTextBox>
                            </StyledProfileImageListItem>
                        </StyledProfileImageItemList>
                    ))
                    }
                </ImageList>
            }
        </>
    )
}

