import {StyledNMenu} from "./Menu.styles";
import {StyledAvatarWithDetailsList} from "../list/List.styles";
import {useNotificationsData} from "../../hooks/useProfile.data";
import {LoadingProgressListItem, NotificationListItem} from "../list/ListControl";

import {useEffect, useState, } from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {notificationSelector} from "../../recoil/atom/selector";
import {NavbarNotificationAtom} from "../../recoil/atom/AtomStore";
import {PostDetailsModal} from "../modalPages/PostDetails.modal.page";
import {useNavigate} from "react-router-dom";


export const NotificationsMenu = () => {
    const navigate = useNavigate()
    const notificationAtom =useRecoilValue(NavbarNotificationAtom)
    const setNotificationSelector = useSetRecoilState(notificationSelector)
    const [open, setOpen] = useState(false)
    const [clickedPost, setClickedPost] = useState(null)
    const setNotificationState = useSetRecoilState(notificationSelector)

    const {isSuccess, data, isLoading, refetch} = useNotificationsData()


    //

    const handleClick = (notification) => {
        switch(notification?.content_type?.model) {
            case "imagepost":
                setClickedPost(notification.object_id)
                setNotificationState()
                return setOpen(!open)
            case "profile":
                setNotificationState()
                return navigate(`/${notification.object_id}`)
            default:
                return null
        }
    }

    useEffect(() => {
        if (notificationAtom.active) {
            refetch()
        }
    }, [notificationAtom.active, refetch]);

    try {
        return (
            <>
            <PostDetailsModal open={open} handleModalClick={handleClick} post={clickedPost} />
            <StyledNMenu
                anchorEl={notificationAtom.anchorEl}
                open={notificationAtom.active}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                onClose={(e) => setNotificationSelector(e)}
            >
                {isLoading && <LoadingProgressListItem/>}
                {isSuccess &&
                    <StyledAvatarWithDetailsList sx={{maxHeight:'35ch'}}>
                        {data.data.map((notification, i) => (
                            <NotificationListItem
                                key={notification.id}
                                handleClick={handleClick}
                                notification={notification}
                                last={i + 1 !== data.data.length}
                            />
                        ))}
                    </StyledAvatarWithDetailsList>
                }
            </StyledNMenu>
            </>
        )
    } catch {
        return null
    }
}

