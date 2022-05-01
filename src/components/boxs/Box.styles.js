import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {MySecondary2} from "../../utils/color-utils";

export const StyledImageBox = styled(Box)(({theme}) => (
    {
        [theme.breakpoints.down(2560)]: {display: "block"},
        [theme.breakpoints.down(1375)]: {display: "none"},
    }
));

export const StyledFormBox = styled(Box)(({theme}) => (
    {
        '& .MuiTextField-root': {margin: 2, width: '35ch'},

    }

))

export const StyledColumnDividedBox = styled(Box)(({theme}) => (
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        direction: "row",
        gridTemplateColumns: {sm: '1fr 1fr'},
    }

))


export const StyledProfileHeaderBox = styled(Box)(({theme}) => (
    {
        width: '60ch',
        height: '60ch',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: "borderRadius",
        gridTemplateColumns: {sm: '1fr 1fr, '},

    }
));


export const StyledRoundImageBox = styled(Box)(({theme}) => (
    {
        backgroundColor: 'background.paper',
        borderColor: 'text.primary',
        border: 1,
        width: '10rem',
        height: '10rem',
        borderRadius: '50%',
        overflow: 'hidden'
    }
));


export const StyledPngModalBox = styled(Box)(({theme}) => (
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        flexDirection: 'column'
    }
));


export const StyledAppBox = styled(Box)(({theme}) => (
    {
        display: "flex",
        justifyContent: "flexStart",
        marginTop: '12ch',
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '125ch'

    }
));

export const StyledSmallSizeModalBox = styled(Box)(({theme}) => (
    {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '65%',
        maxWidth: '400px',
        minWidth: '348px',
        maxHeight: '400px',
        minHeight: '391px',
        borderRadius: 10,
        boxShadow: 24,
        backgroundColor: '#ffffff',

        '& .MuiPaper-root': {
            backgroundColor: '#ffffff',
        },
        '& .MuiTypography-root': {
            color: 'black',
            paddingTop: 5,
            textAlign: 'center',
            fontFamily: 'Quicksand'
        }
    }
));

export const StyledExtraSmallSizeModalBox = styled(StyledSmallSizeModalBox)(({theme}) => (
    {
        maxWidth: '68.5ch',
        minWidth: '29.5ch',
        maxHeight: '37ch',
        minHeight: '37ch',
    }
));

export const StyledConfirmSmallSizeModalBox = styled(StyledSmallSizeModalBox)(({theme}) => (
    {
            maxWidth: '50ch',
            minWidth: '29.5ch',
            maxHeight: '37ch',
            minHeight: '37ch',
    }
));

export const StyledMidSizeModalBox = styled(Box)(({theme}) => (
    {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '107ch',
        height: '112ch',
        maxWidth: '107ch',
        minWidth: '44ch',
        maxHeight: '112ch',
        minHeight: '47ch',
        borderRadius: 10,
        boxShadow: 24,
        backgroundColor: '#ffffff',

        '& .MuiPaper-root': {
            backgroundColor: '#ffffff',
        },
        '& .MuiTypography-root': {
            color: 'black',
            paddingTop: 5,
            textAlign: 'center'
        }
    }
));

export const StyledLargeSizeModalBox = styled(Box)(({theme}) => (
    {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '1500px',
        maxHeight: '1000px',
        display: 'flex',
        flexWrap: 'noWrap',
        overflow: 'hidden',
        [theme.breakpoints.up(1600)]: {width: '100%', height: '100%'},
        [theme.breakpoints.down(1599)]: {width: '165ch', height: '110ch'},
        [theme.breakpoints.down(1401)]: {width: '150ch', height: '100ch'},
        [theme.breakpoints.down(1251)]: {width: '135ch', height: '90ch'},
        [theme.breakpoints.down(1151)]: {width: '120ch', height: '80ch'},
        [theme.breakpoints.down(1051)]: {width: '105ch', height: '70ch'},
        [theme.breakpoints.down(901)]: {width: '90ch', height: '60ch'},
        [theme.breakpoints.down(751)]: {width: '75ch', height: '50ch'},

        '&. MuiCardHeader-root': {width: '100%'}
    }
));


export const StyledModalImageCropBox = styled(StyledMidSizeModalBox)(({theme}) => (
    {
        top: '52%',
        width: '90%',
        height: '85%',
        maxWidth: '855px',
        minWidth: '348px',
        maxHeight: '600px',
        minHeight: '391px',
        paddingX: 5,
    }
));

export const StyledTabControllerBox = styled(Box)(({theme}) => (
    {
        justifyContent: 'center'
    }
));


export const StyledImageTextBox = styled(Box)(({theme}) => (
    {
        display: 'flex',
        mx: '2px',
        transform: 'scale(0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        zIndex: 1,
        fontSize: '3ch',
    }
));

export const StyledOuterHeaderBox = styled(Box)(({theme}) => (
    {
        borderBottom: 'groove',
        borderColor: '#fdfdfd',
        borderBlockWidth: '1px',
        alignItems: 'center'
    }
));

export const StyledInnerHeaderBox = styled(Box)(({theme}) => (
    {
        width: '100%',
        flexWrap: 'noWrap',
        display: 'flex',
        padding: 0.5,
        '& .MuiTypography-root': {fontFamily: "Quicksand", fontWeight: 400},
        '& .MuiButton-label : hover': {backgroundColor: 'transparent'},
        '& .MuiButton-root: hover': {backgroundColor: 'transparent'},
        '& .MuiButtonBase-root: hover': {backgroundColor: 'transparent'},
    }
));

export const StyledEditProfileMenuBox = styled(Box)(({theme}) => (
    {
        flexGrow: 1,
        backgroundColor: 'white',
        display: 'flex',
        height: '125ch',
        minWidth: '125ch',
        border: 'solid',
        borderWidth: 'thin',
        borderColor: MySecondary2
    }
));

export const StyledEditProfileTabsMenuBox = styled(Box)(({theme}) => (
    {
        flexBasis: "25%",
        border: 'solid',
        borderWidth: 'thin',
        borderColor: MySecondary2
    }
));

export const StyledEditProfileFormBox = styled(Box)(({theme}) => (
    {
        flexBasis: "75%",
    }
));


export const StyledColumnDividedFeedBox = styled(Box)(({theme}) => (
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "flexStart",
        direction: "row",
        maxWidth: '125ch',
    }

))


export const StyledPostColumnFeedBox = styled(Box)(({theme}) => (
    {
        minWidth: "614px",
        overflow: 'auto'
    }
));


export const StyledCommentColumnBox = styled(Box)(({theme}) => (
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        maxWidth: '62.5ch',
        minWidth: '50ch',


    }
));
