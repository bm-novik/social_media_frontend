import {LinearProgress} from "@mui/material";
import {MyPink, MyPink2} from "../../../utils/color-utils";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";



export const StyledLoader = styled(LinearProgress)(({theme}) => (
    {
        backgroundColor: '#f893bb',
        "& .MuiLinearProgress-colorPrimary": {backgroundColor:MyPink},
        "& .MuiLinearProgress-barColorPrimary": {backgroundColor:MyPink},
        "& .MuiLinearProgress-root": {backgroundColor:MyPink},
    }
));





export const WindowLoader = () => {
    return (
        <StyledLoader

            sx={{
                width: '100%',
                position: 'fixed',
                top: '7.85ch',
                left: 0,

            }}

        />
    );
};
