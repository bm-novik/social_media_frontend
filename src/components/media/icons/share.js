import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import IconButton from "@mui/material/IconButton";


export const Share = ({ post }) => {
 return (
     <IconButton
         size="large"
         color="inherit"
         onClick={() => console.log('Share Click future implementation')}
     >
         <SendOutlinedIcon />
     </IconButton>
 );
};
