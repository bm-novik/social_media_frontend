import Box from '@mui/material/Box';
import {Searchbar} from "./searchBar/searchbar";
import {LogoImage} from "./icons/LogoImage";
import {AppbarAvatarMenu} from "../menus/AppbarAvatarMenu";
import {NotificationsMenu} from "../menus/AppbarNotificationrMenu";
import {StyleToolBar} from "./toolbar/Toolbar.styles";
import {ButtonGroup, LinearProgress} from "@mui/material";
import {ButtonControl} from "./icons/IconControl";
import {AddPostModal} from "../modalPages/AddPost.modal.page";
import {StyledAppbar} from "./Appbar.styles";
import {useRecoilValue} from "recoil";
import {LinearLoadingProgressAtom} from "../../recoil/atom/AtomStore";


export default function PrimarySearchAppBar() {
    const loadingState = useRecoilValue(LinearLoadingProgressAtom)

    return (
        <Box sx={{flexGrow: 1}}>
            <LinearProgress color="secondary" sx={{display: loadingState}}/>
            <StyledAppbar position="sticky" elevation={0}>
                <StyleToolBar>
                    <LogoImage/>
                    <Box sx={{flexGrow: 1,}}/>
                    <Searchbar/>
                        <ButtonGroup sx={{width: '37ch', marginLeft: '10ch', justifyContent: 'space-between'}} spacing='2' aria-label="large button group">
                            <ButtonControl control={'home'}/>
                            <ButtonControl control={'chat'}/>
                            <ButtonControl control={'add'}/>
                            <ButtonControl control={'explore'}/>
                            <ButtonControl control={'notification'} />
                            <ButtonControl control={'avatar'} />
                        </ButtonGroup>
                </StyleToolBar>
            </StyledAppbar>
            <AppbarAvatarMenu />
            <NotificationsMenu />
            <AddPostModal />
        </Box>
    )
}
