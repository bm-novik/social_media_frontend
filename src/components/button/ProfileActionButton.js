import Typography from "@mui/material/Typography";
import {ProfileOutlinedButton, StyledPinkTextButton} from "./Button.styles";

export const ProfileActionButton = ({handleClick, text, variant, value, textButton = false}) => {

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
                    variant={variant}
                    onClick={() => handleClick(value)}
                >
                    {text}
                </ProfileOutlinedButton>}
        </Typography>
    );
};
