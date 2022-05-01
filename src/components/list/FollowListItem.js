import {useNavigate} from "react-router-dom";
import {ProfileActionButton} from "../button/ProfileActionButton";
import {useFollowCreateData, useFollowerDeleteData, useFollowingDeleteData} from "../../hooks/useProfile.data";
import {useQueryClient} from "react-query";
import {FollowModalListItem} from "./FollowModalListItem";
import {ConfirmUnfollow} from "../modalPages/ConfirmUnfollow";
import {useState} from "react";

export const FollowListItem = ({follow, handleModalClick, isUser, control}) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    const [text, setText] = useState('')
    const [execute, setExecute] = useState()



    const handleConfirmModalClick = () => {
        setOpenConfirmModal(!openConfirmModal)
    }

    const onSuccess = data => {
        queryClient.invalidateQueries('useFollowers')
        queryClient.invalidateQueries('useFollowing')
        queryClient.invalidateQueries('useProfileDetail')
    }


    // User start following friend
    const {mutate: createFollowingData} = useFollowCreateData(onSuccess)
    // Remove friend from following user
    const {mutate: deleteFollowerData} = useFollowerDeleteData(onSuccess)
    // User stop following friend
    const {mutate: deleteFollowingData} = useFollowingDeleteData(onSuccess)

    const handleCreateClick = (follow) => {
        createFollowingData({object_id: follow.id})
    }

    const handleRemoveClick = () => {
        setText('Remove')
        setExecute(() => deleteFollowerData)
        handleConfirmModalClick()
    }

    const handleStopFollowingClick = () => {
        setText('Unfollow')
        setExecute(() => deleteFollowingData)
        handleConfirmModalClick()
    }


    const handleProfileClick = (follow) => {
        navigate(`/${follow.profile.id}`)
        handleModalClick()
    }

    const followerButtonLogic = (status, following) => {
        switch (status) {
            case true:
                if (isUser) {
                    return <ProfileActionButton
                        handleClick={handleRemoveClick}
                        value={follow}
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
                                value={follow}
                                textButton={true}
                                text={'follow'}
                            />
                            <ProfileActionButton
                                handleClick={handleRemoveClick}
                                value={follow}
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

    const followingButtonLogic = (status, following) => {
        switch (status) {
            case true:
                return <ProfileActionButton
                    handleClick={handleStopFollowingClick}
                    value={following}
                    text={isUser ? 'Remove' : 'Following'}
                    variant={"outlined"}/>

            case false:
                return <ProfileActionButton
                    handleClick={handleCreateClick}
                    value={following}
                    text={'Follow'}
                    variant={"outlined"}/>
            default:
                return null
        }
    }

    return (
        <>
            <ConfirmUnfollow
                open={openConfirmModal}
                handleModalClick={handleConfirmModalClick}
                execute={execute}
                text={text}
                object={follow}
            />
            <FollowModalListItem
                follow={follow}
                Button ={control ==='follower' ?  followerButtonLogic : followingButtonLogic}
                handleProfileClick={handleProfileClick}
            />
        </>
    );
};

