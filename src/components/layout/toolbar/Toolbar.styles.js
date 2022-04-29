import {styled} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

export const StyleToolBar = styled(Toolbar)(({ theme }) => ({
    color: 'black',
    disableRipple: true,
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up(1375)]: {width: "125ch"},
    [theme.breakpoints.down(1375)]: {width: "145ch"},
    [theme.breakpoints.down(1240)]: {width: "130ch"},
    [theme.breakpoints.down(970)]: {width: "85ch"},
    [theme.breakpoints.down(595)]: {width: "60ch"},
    [theme.breakpoints.down(320)]: {width: "60ch"},

}));