import {styled} from "@mui/material/styles";
import List from "@mui/material/List";
import ImageListItem from "@mui/material/ImageListItem";
import {Grid} from "@mui/material";


export const StyledAvatarWithDetailsList = styled(List)(({theme}) => ({
    '& .MuiList-root': {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: 'background.paper',
        maxHeight: '10ch',
    },
    '& .MuiListItem-root': {
        alignItems: "flex-start"
    },
    '& .MuiMenu-list': {maxHeight: '10ch',},
    '& .MuiListItemText-root': {},
    '& .MuiTypography-root': {
        display: "inline",
        color: "text.primary"
    }
}));


export const StyledProfileImageListItem = styled(Grid)(({theme}) => ({
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.72)', /* Black see-through */
    color: '#f1f1f1',
    width: '100%',
    height: "100%",
    transition: '.5s ease',
    opacity: 0,
    fontSize: '20px',
    padding: '20px',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 0,

    '&:hover': {
        opacity: 0.5,
        cursor: 'pointer'
    },
    '&MuiSvgIcon-root': {
        color: '#f1f1f1',
    }
}))

export const StyledProfileImageItemList = styled(ImageListItem)(({theme}) => ({
    position: 'relative',
    overflow: 'hidden',

    '&.MuiImageListItem-root' :{
        width: '37ch',
        height: "37ch",
    },

    '&.MuiImageListItem-img' :{
        width: '37ch',
        height: "37ch",
    },



}))

export const StyledExploreImageItemList = styled(ImageListItem)(({theme}) => ({
    position: 'relative',
    overflow: 'hidden',

    // '&.MuiImageListItem-root' :{
    //     width: '37ch',
    //     height: "37ch",
    // },
    //
    // '&.MuiImageListItem-img' :{
    //     width: '37ch',
    //     height: "37ch",
    // },



}))