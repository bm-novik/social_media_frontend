import {styled} from "@mui/material/styles";
import Menu from "@mui/material/Menu";


export const StyledAvatarMenu = styled(Menu)(({ theme }) => (

    {
        '& .MuiMenu-root': {
            elevation: 0,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            justifyContent: 'start',
        },
        '& .MuiButtonBase-root': {
            justifyContent: 'left',
            width: '20ch',
            margin: 6,
        },
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    }
))




export const StyledNMenu = styled(Menu)(({ theme }) => ({
    '& .MuiMenu-root': {
        Width: '120ch',
        maxHeight: '10ch'
    }
}))