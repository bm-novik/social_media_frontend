import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {MySecondary} from "../../utils/color-utils";


export const StyledProfileButtonLineTypography = styled(Typography)(({theme}) => ({
    color: "text.secondary",
    spacing: 1,
    gutterBottom: true,
    '&.MuiTypography-root' : {fontFamily: 'Quicksand'}
}));


export const StyledSecondaryMenuTypography = styled(Typography)(({theme}) => ({
    color: MySecondary,
    fontFamily: 'QuickSand',
    spacing: 1,
    gutterBottom: true,
    marginTop: '1.5ch',
    fontSize: '1.75ch',
    '&.MuiTypography-root' : {fontFamily: 'Quicksand'}
}));

export const StyledSLabelMenuTypography = styled(Typography)(({theme}) => ({
    fontFamily: 'QuickSand',

    '&.MuiTypography-root' : {fontFamily: 'Quicksand', fontWeight: 600, }
}));
