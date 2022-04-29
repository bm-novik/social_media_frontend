import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {Avatar, Stack} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import {Like} from "../media/icons/like";
import {timeFromPost} from "../../utils/commonFunk";
import {StyledPinkTextButton} from "../button/Button.styles";



export const Comment = ({comment}) => {
    const space = ' '


    return (
        <Stack sx={{width: '100%'}}>
            <CardHeader
                sx={{
                    underline: "none",
                    overflow: 'hidden',
                    '&.MuiCardHeader-root': {alignItems: 'flex-start', width: '-webkit-fill-available'}
                }}
                avatar={
                    <Avatar
                        sx={{cursor: 'pointer'}}
                        alt={comment?.user?.profile.first_name}
                        src={comment?.user?.profile.profile_pic}/>
                }
                action={
                    <Like
                        object={comment} did_like={comment?.did_like} size={'small'}/>
                }
                title={
                    <Typography variant="body2" sx={{fontFamily: 'Quicksand', fontSize: '1.85ch', color: "black"}}>
                        <Link to={`/${comment?.user?.profile.id}`}
                              style={{
                                  textDecoration: 'none',
                                  cursor: 'pointer',
                                  color: 'inherit',
                                  fontWeight: 600
                              }}>
                            {comment?.user?.username}{space}
                        </Link>
                        {comment.content}
                    </Typography>
                }
                subheader={
                    <Typography sx={{marginTop: '2ch', fontFamily: 'Quicksand', fontSize: '0.775rem'}}>
                        {timeFromPost(comment?.date_created)} {space}
                        {(comment?.like_count > 0) &&
                            <StyledPinkTextButton style={{
                                color: 'inherit',
                                fontWeight: 400,
                                background: 'transparent'
                            }}>
                                {comment?.like_count} likes
                            </StyledPinkTextButton>
                        }
                        <StyledPinkTextButton style={{
                            color: 'inherit',
                            fontWeight: 400,
                            background: 'transparent'
                        }}> Replay</StyledPinkTextButton>
                    </Typography>
                }
            />

        </Stack>
    )
}




