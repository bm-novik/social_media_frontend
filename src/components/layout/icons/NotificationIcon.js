import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {notificationSelector} from "../../../recoil/atom/selector";
import {NavbarNotificationAtom} from "../../../recoil/atom/AtomStore";
import FavoriteIcon from '@mui/icons-material/Favorite';

export const NotificationIconButton = () => {
    const setNotificationState = useSetRecoilState(notificationSelector)
    const notificationState = useRecoilValue(NavbarNotificationAtom)

    return (
        <IconButton
            onClick={(e) => setNotificationState(e)}
            size="large"
            color="inherit"
        >
            <Badge color="secondary">
                { notificationState ? <FavoriteBorderIcon/> : <FavoriteIcon /> }
            </Badge>
        </IconButton>
    )
}
