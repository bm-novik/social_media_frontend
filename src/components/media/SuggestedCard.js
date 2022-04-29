import Avatar from "@mui/material/Avatar";
import {StyledPinkTextButton} from "../button/Button.styles";
import CardHeader from "@mui/material/CardHeader";
import {useNavigate} from "react-router-dom";
import {useFollowCreateData, useFollowingDeleteData} from "../../hooks/useProfile.data";
import {useQueryClient} from "react-query";

export const SuggestedCardHeader = ({id, first, last, nickName, image, text}) => {
    const queryClient = useQueryClient()

    const onSuccess = () => {
        queryClient.invalidateQueries('useTopFive')
        queryClient.invalidateQueries('usePostFeedList')
    }

    const {mutate} = useFollowCreateData(onSuccess)

    const navigate = useNavigate()

    return (
        <CardHeader
            sx={{width: '37ch', underline: "none", backgroundColor: 'transparent'}}
            avatar={
                <Avatar
                    sx={{cursor: 'pointer'}}
                    onClick={() => navigate(`/${id}`)}
                    alt={first}
                    src={image}/>
            }

            action={
                <StyledPinkTextButton style={{paddingTop: '2ch', backgroundColor: 'transparent'}}
                                      onClick={() => text ? navigate(`/${id}`) : mutate({object_id: id})}>
                    {text ? 'Profile' : 'Follow'}
                </StyledPinkTextButton>
            }

            title={
                <div style={{cursor: 'pointer'}}
                     onClick={() => navigate(`/${id}`)}>{nickName}</div>
            }

            subheader={
                <div
                    style={{cursor: 'pointer'}}
                    onClick={() => navigate(`/${id}`)}>{first} {last}
                </div>
            }
        />
    )
}
