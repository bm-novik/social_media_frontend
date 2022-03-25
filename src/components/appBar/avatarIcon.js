import * as React from "react";
import {Avatar} from "@mui/material";
import IconButton from "@mui/material/IconButton";

export const AvatarMenu = ({menuId, handleProfileMenuOpen}) => {
 return (
     <IconButton
         onClick={handleProfileMenuOpen}
         size="small"

     >
         <Avatar sx={{ width: 24, height: 24 }}>B</Avatar>
     </IconButton>
 );
};