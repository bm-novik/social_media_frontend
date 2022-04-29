import {styled} from "@mui/material/styles";
import {FormControlLabel, Radio} from "@mui/material";
import {MyPink} from "../../utils/color-utils";

export const StyledPinkRadio = styled(Radio)(({theme}) => ({
    color: MyPink,

    '&.Mui-checked': {
        color: MyPink,
    },
    '& .MuiSvgIcon-root': {
        fontSize: '2ch',
    },

    '& .MuiFormControlLabel-label': {
        paddingLeft: '1ch',
        paddingTop: 0,
        fontSize: '1.75ch',
        fontWeight: '600',

    },

}));

export const StyledControlLabel = styled(FormControlLabel)(({theme}) => ({

    '& .MuiFormControlLabel-label': {
        paddingLeft: '1ch',
        paddingTop: 0,
        fontSize: '1.75ch',
        fontWeight: '600',
        marginBottom: '0.75ch',

    },

}));
