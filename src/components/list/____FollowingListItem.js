import {useNavigate} from "react-router-dom";
import {ProfileActionButton} from "../button/ProfileActionButton";
import {useFollowCreateData, useFollowingDeleteData} from "../../hooks/useProfile.data";
import {useQueryClient} from "react-query";
import {FollowModalListItem} from "./FollowModalListItem";
import {useState} from "react";
import {ConfirmUnfollow} from "../modalPages/ConfirmUnfollow";

// TODO delete
export const ____FollowingListItem____ = ({following, handleModalClick, isUser}) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const [text, setText] = useState('')
    const [execute, setExecute] = useState()
    const [openConfirmModal, setOpenConfirmModal] = useState(false)

    const handleConfirmModalClick = () => {
        setOpenConfirmModal(!openConfirmModal)
    }

    // React Query logic
    const onSuccess = () => {
        queryClient.invalidateQueries('useFollowing')
        queryClient.invalidateQueries('useProfileDetail')
    }

    // User stop following friend
    const {mutate: deleteFollowingData} = useFollowingDeleteData(onSuccess)
    // User start following friend
    const {mutate: createFollowingData} = useFollowCreateData(onSuccess)

    const handleStopFollowingClick = () => {
        setText('Unfollow')
        setExecute(() => deleteFollowingData)
        handleConfirmModalClick()
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
                object={following}
            />
            <FollowModalListItem
                follower={following}
                isFollow={isFollow}
                handleProfileClick={handleProfileClick}
            />
        </>
    )
}
