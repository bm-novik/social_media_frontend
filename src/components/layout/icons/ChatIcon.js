import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import IconButton from "@mui/material/IconButton";
import ChatIcon from '@mui/icons-material/Chat';
import {useRecoilValue} from "recoil";
import {NavbarChatAtom} from "../../../recoil/atom/AtomStore";

export const ChatIconButton = () => {
    const chatState = useRecoilValue(NavbarChatAtom)

    return (
            <IconButton size="large" color="inherit">
                { chatState ? <ChatOutlinedIcon/> : <ChatIcon /> }
            </IconButton>
            );
};

