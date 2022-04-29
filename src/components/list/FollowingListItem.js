import {useNavigate} from "react-router-dom";
import {ProfileActionButton} from "../button/ProfileActionButton";
import {useFollowCreateData, useFollowingDeleteData} from "../../hooks/useProfile.data";
import {useQueryClient} from "react-query";
import {FollowModalListItem} from "./FollowModalListItem";

export const FollowingListItem = ({following, handleModalClick, isUser}) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    // React Query logic
    const onSuccess = () => {
        queryClient.invalidateQueries('useFollowing')
        queryClient.invalidateQueries('useProfileDetail')
    }

    const {mutate: deleteFollowingData} = useFollowingDeleteData(onSuccess)
    const {mutate: createFollowingData} = useFollowCreateData(onSuccess)

    const handleRemoveClick = (follower) => {
        deleteFollowingData({object_id: follower.id})
    }

    const handleCreateClick = (follower) => {
        createFollowingData({object_id: follower.id})
    }

    const handleProfileClick = (following) => {
        navigate(`/${following.profile.id}`)
        handleModalClick()
    }

    const isFollow = (status, following) => {

        switch (status) {
            case true:
                if (isUser) return <ProfileActionButton handleClick={handleRemoveClick} value={following} text={'Remove'} variant={"outlined"}/>
                return <ProfileActionButton handleClick={handleRemoveClick} value={following} text={'Following'} variant={"outlined"}/>
            case false:
                return <ProfileActionButton handleClick={handleCreateClick} value={following} text={'Follow'} variant={"outlined"}/>
            default:
                return null
        }
    }

    return (
        <FollowModalListItem follower={following} isFollow={isFollow} handleProfileClick={handleProfileClick} />
    );
};

