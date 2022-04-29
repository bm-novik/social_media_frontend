import {useNavigate} from "react-router-dom";
import {ProfileActionButton} from "../button/ProfileActionButton";
import {useFollowCreateData, useFollowerDeleteData, useFollowingDeleteData} from "../../hooks/useProfile.data";
import {useQueryClient} from "react-query";
import {FollowModalListItem} from "./FollowModalListItem";

export const FollowersListItem = ({follower, handleModalClick, isUser}) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const onSuccess = (data) => {
        queryClient.invalidateQueries('useFollowers')
        queryClient.invalidateQueries('useProfileDetail')
    }

    const {mutate: createFollowingData} = useFollowCreateData(onSuccess)
    // Remove friend from following user
    const {mutate: deleteFollowerData} = useFollowerDeleteData(onSuccess)
    // User stop following friend
    const {mutate: deleteFollowingData} = useFollowingDeleteData(onSuccess)

    const handleCreateClick = (follower) => {
        createFollowingData({object_id: follower.id})
    }

    const handleRemoveClick = (follower) => {
        deleteFollowerData({object_id: follower.id})
    }

    const handleStopFollowingClick = (follower) => {
        deleteFollowingData({object_id: follower.id})
    }

    const handleProfileClick = (follower) => {
        navigate(`/${follower.id}`)
        handleModalClick()
    }

    const isFollow = (status, following) => {
        switch (status) {
            case true:
                if (isUser) {
                    return <ProfileActionButton
                        handleClick={handleRemoveClick}
                        value={follower}
                        text={'Remove'}
                        variant={"outlined"}/>
                } else {
                    return <ProfileActionButton
                        handleClick={handleStopFollowingClick}
                        value={following}
                        text={'Following'}
                        variant={"outlined"}/>
                }

            case false:
                if (isUser) {
                    return (
                        <>
                            <ProfileActionButton
                                handleClick={handleCreateClick}
                                value={follower}
                                textButton={true}
                                text={'follow'}
                            />
                            <ProfileActionButton
                                handleClick={handleRemoveClick}
                                value={follower}
                                text={'Remove'}
                                variant={"outlined"}
                            />
                        </>
                    )
                } else {
                    return <ProfileActionButton
                        handleClick={handleCreateClick}
                        value={following}
                        text={'Follow'}
                        variant={"outlined"}
                        sx={{'&.MuiButton-root': {backgroundColor: '#ec5990'}}}
                    />
                }

            default:
                return null
        }
    }

    return (
        <FollowModalListItem follower={follower} isFollow={isFollow} handleProfileClick={handleProfileClick} />

    );
};

