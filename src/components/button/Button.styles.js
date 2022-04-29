import Button from "@material-ui/core/Button";
import {styled} from "@mui/material/styles";
import {MyPink, MyPink2} from "../../utils/color-utils";


export const FormSubmitButton = styled(Button)(({theme}) => ({
    '&.MuiButton-root': {
        textTransform: 'none',
        color: 'white',
        backgroundColor: MyPink,
        border: "none",
        marginTop: "40px",
        padding: "20px",
        fontSize: "16px",
        fontWeight: "100",
        letterSpacing: "10px",
        display: "block",
        appearance: "none",
        borderRadius: "4px",
        width: '100%',
    },
    '&:hover': {
        color: MyPink, background: MyPink, border: '1px'
    },

}));

export const SmallSubmitButton = styled(FormSubmitButton)(({theme}) => ({
    '&.MuiButton-root': {
        marginTop: "20px",
        padding: "8px",
        fontSize: "10px",
        letterSpacing: "2px",
        display: "block",
        width: '35ch',
        flexWrap: "nowrap",
        textAlign: 'center',
    }
}));

export const ProfileModalButton = styled(Button)(({theme}) => ({
        '&.MuiButton-root': {
            fontSize: "1rem",
            letterSpacing: "0.00938em",
            textTransform: 'unset',
            fontWeight: '400'
        },
        iconHover: 'none'



    }))
;

export const ProfileOutlinedButton = styled(Button)(({theme}) => ({
    '&.MuiButton-root': {
        textTransform: 'unset',
        size: "small",
        paddingX: 1,
        paddingTop: 0.5,
        paddingBottom: 0.5,
        marginRight: '2ch',
        marginLeft: '2ch',
    },
    '&.MuiSvgIcon-root' :{
        width: '0.1em',
        height: '0.7em',
        marginRight: '1ch',
    }

}));

export const ProfileColoredOutlinedButton = styled(Button)(({theme}) => ({
    '&.MuiButton-root': {
        textTransform: 'unset',
        size: "small",
        padding: 1,
        marginRight: '2ch',
        marginLeft: '2ch',
        backgroundColor: MyPink,
        color: 'white'
    }
}));

export const StyledPostCommentButton = styled(Button)(({theme}) => ({
    '&.MuiButton-root :hover': {background: 'transparent'},
    '&.MuiButton-root': {
        background: 'transparent',
        color: MyPink2,
        textTransform: 'unset',
    }
}));

export const StyledCommentModalButton = styled(Button)(({theme}) => ({
    '&.MuiButton-root :hover': {background: 'transparent'},
    '&.MuiButton-root': {
        textTransform: 'unset',
        paddingLeft: 0,
        paddingBottom: 3,
        paddingTop: 2,
        color: "MySecondary",
        fontSize: '1.85ch',
        fontWeight: 400,
    }
}));

export const StyledLikeModalButton = styled(Button)(({theme}) => ({
    '&.MuiButton-root :hover': {background: 'transparent'},
    '&.MuiButton-root': {
        textTransform: 'unset',
        paddingLeft: 0,
        color: "#000000",
        fontSize: '1.85ch',
        fontWeight: 600,
        justifyContent: 'start',
    }
}));


export const StyledPinkTextButton = styled(Button)(({theme}) => ({
    '&.MuiButton-root :hover': {background: 'transparent'},
    '&.MuiButton-root': {
        color: MyPink,
        textTransform: 'unset',
        fontFamily: 'QuickSand',
        paddingLeft: 0,
        paddingTop: 0
    }
}));
