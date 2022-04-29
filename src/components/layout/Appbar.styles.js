import {styled} from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";

export const StyledAppbar = styled(AppBar)(({theme}) => ({
    width: '100%',
    backgroundColor: "white",
    alignItems: 'center',
    borderBottom: "black",
    borderBottomStyle: "solid",
    borderBottomWidth: 'thin',
    justifyItems: "center",
    marginBottom: "4ch",
    position: 'fixed',
    top: 0,
    '&.MuiPaper':{
        backgroundColor: "white",
        width: '100%',
        position:'fixed'
    },

}))

//