import {useRecoilState, useRecoilValue} from "recoil";
import { useNavigate } from "react-router-dom";

import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Logout, Settings } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import { Divider, ListItemIcon, Stack } from "@mui/material";

import { AuthenticatedAtom } from "../../recoil/atom/AtomStore";
import { avatarSelector } from "../../recoil/atom/selector";
import { useLogoutData } from "../../hooks/UseAuth.data";
import { StyledAvatarMenu } from "./Menu.styles";

export const AppbarAvatarMenu = () => {
    const [avatarAtom, setAvatarAtom]  = useRecoilState(avatarSelector)
    const user = useRecoilValue(AuthenticatedAtom)
    const navigate = useNavigate()


    const handleLogoutClick = () =>  {
        mutate()
    }


    const { mutate } = useLogoutData()


 return (
     <StyledAvatarMenu
         anchorEl={avatarAtom.anchorEl}
         open={avatarAtom.active}
         anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
         transformOrigin={{horizontal: 'right', vertical: 'top'}}
         onClick={setAvatarAtom}
         arrow="true"
     >
         <Stack spacing={1}>
             <MenuItem
                 onClick={()=> navigate(`/${user.profileId}`)}
                 >
                 <ListItemIcon >
                     <AccountCircleOutlinedIcon fontSize="small" />
                 </ListItemIcon> Profile
             </MenuItem>
             <Divider />
             <MenuItem onClick={()=> navigate(`/accounts/edit`)}>
                 <ListItemIcon>
                     <ManageAccountsOutlinedIcon fontSize="small" />
                 </ListItemIcon>
                 Edit Profile
             </MenuItem>
             <MenuItem>
                 <ListItemIcon>
                     <Settings fontSize="small" />
                 </ListItemIcon>
                 Settings
             </MenuItem>
             <Divider />
             <MenuItem onClick={handleLogoutClick}>
                 <ListItemIcon>
                     <Logout fontSize="small" />
                 </ListItemIcon>
                 Logout
             </MenuItem>
         </Stack>
     </StyledAvatarMenu>
 )
}
