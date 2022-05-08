import Typography from "@mui/material/Typography";
import {ProfileOutlinedButton, StyledPinkTextButton} from "./Button.styles";
import {MyPink} from "../../utils/color-utils";

export const ProfileActionButton = ({handleClick, text, variant, value, buttonColor= false, textButton = false}) => {
        const pink = {backgroundColor:MyPink, color: 'white'}
    return (
        <Typography color="text.secondary"
                    gutterBottom
                    variant="subtitle1"
                    component="h6"
                    sx={{spacing: 1, '&.MuiTypography-root': {fontFamily: 'Quicksand'}}}

        >
            {textButton ?
                <StyledPinkTextButton
                    style={{background: 'transparent', left: '-8ch', top: ' -0.9ch'}}
                    onClick={() => handleClick(value)}
                >
                    {text}
                </StyledPinkTextButton>
                :
                <ProfileOutlinedButton
                    style={buttonColor ? pink : {}}
                    variant={variant}
                    onClick={() => handleClick(value)}
                >
                    {text}
                </ProfileOutlinedButton>}
        </Typography>
    );
};
