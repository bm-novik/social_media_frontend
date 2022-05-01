import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CardHeader from "@mui/material/CardHeader";
import {useNavigate} from "react-router-dom";
import {StyledPinkTextButton} from "../../button/Button.styles";
import {useFollowCreateData, useFollowingDeleteData} from "../../../hooks/useProfile.data";
import {useQueryClient} from "react-query";


export const PostHeader = ({author, modal = false}) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const onSuccess = () => {
        queryClient.invalidateQueries('useFollowing')
        queryClient.invalidateQueries('useProfileDetail')
        queryClient.invalidateQueries('usePostDetail')
    }


    const {mutate: deleteFollowingData} = useFollowingDeleteData(onSuccess)
    const {mutate: createFollowingData} = useFollowCreateData(onSuccess)

    const handleFollowClick = (author) => {
        console.log(author)
        if (author.profile.follow_status){
            deleteFollowingData({object_id: author.profile.id})
        } else {
            createFollowingData({object_id: author.profile.id})
        }
    }

    const handleProfileClick = (id) => {
        navigate(`/${id}`)
    }

    return (
        <CardHeader

            sx={{underline: "none"}}
            avatar={
                <Avatar
                    sx={{cursor: 'pointer'}}
                    onClick={() => handleProfileClick(author?.id)}
                    alt={author?.profile.first_name}
                    src={author?.profile.profile_pic}/>
            }
            action={
                <IconButton aria-label="settings" onClick={(event) => console.log('More')}>
                    <MoreHorizIcon/>
                </IconButton>
            }

            title={
                    <div style={{cursor: 'pointer'}}
                         // onClick={() => handleProfileClick(author?.id)}
                    >{author?.username}
                        {modal &&
                            <StyledPinkTextButton style={{marginLeft: '1ch'}}
                                                  onClick={() => handleFollowClick(author)}
                            >
                                {author?.profile?.follow_status ? 'following' : 'follow'}
                            </StyledPinkTextButton>
                        }
                    </div>
            }

            subheader={
                <div style={{cursor: 'pointer'}}
                     onClick={() => handleProfileClick(author?.id)}>
                    {author?.profile.first_name}{author?.profile.last_name}
                </div>
            }
        />
    );
};