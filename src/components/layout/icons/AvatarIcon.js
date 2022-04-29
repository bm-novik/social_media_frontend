import {Avatar} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {AuthenticatedAtom} from "../../../recoil/atom/AtomStore";
import {avatarSelector} from "../../../recoil/atom/selector";

export const AvatarIconButton = ({handleClick}) => {
    const userImage = useRecoilValue(AuthenticatedAtom)
    const setAvatarState = useSetRecoilState(avatarSelector)

    return (
        <IconButton
            onClick={(e) => setAvatarState(e)}
            size="small"
        >
            <Avatar
                sx={{width: 24, height: 24}}
                src={userImage.image}>
            </Avatar>
        </IconButton>
    )
}