import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid";


export const StyledTabPaneRowGridContainer = styled(Grid)(({theme}) => ({
    marginBottom:'2ch',
    spacing: 2,
//    TODO: fix margin

}));

export const StyledTabPaneLabelGridItem = styled(Grid)(({theme}) => ({
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '4ch',
    alignItems: 'center'

}));

export const StyledTabPaneBottomLineGridItem = styled(Grid)(({theme}) => ({
    marginBottom: '2ch',

}));