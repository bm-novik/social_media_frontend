import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export const FormAlert = ({severity, setOpen, message}) => {
 return (
     <Alert
         severity={severity}
         sx={{width:'100%', fontFamily: 'QuickSand', }}
         action={
             <IconButton
                 aria-label="close"
                 color="inherit"
                 size="small"
                 onClick={() => {
                     setOpen(false);
                 }}
             >
                 <CloseIcon fontSize="inherit" />
             </IconButton>
         }
         sx={{ mb: 2 }}
     >
         {message}
     </Alert>
 );
};
