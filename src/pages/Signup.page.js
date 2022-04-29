import {SignupForm} from "../components/form/SignupForm"
import {Grid, Paper} from "@mui/material"
import {StyledColumnDividedBox, StyledFormBox, StyledImageBox} from "../components/boxs/Box.styles"
import {SIGNUP_PIC_ROOT} from "../utils/config";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom'

export const Signup = () => {
    return (
        <StyledColumnDividedBox>
            <StyledImageBox>
                <img
                    width={'590 ch'}
                    src={`${SIGNUP_PIC_ROOT}?w=650&fit=crop&auto=format`}
                    srcSet={`${SIGNUP_PIC_ROOT}?w=650&fit=crop&auto=format&dpr=2 2x`}
                    alt={'logo'}
                    loading="lazy"/>
            </StyledImageBox>

            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">

                <StyledFormBox>
                    <Paper sx={{mx: 3,mt:3, mb:0, p: 5, width: '72ch'}}>
                        {/*<LogoImage/>*/}
                        <SignupForm/>
                    </Paper>
                </StyledFormBox>
                <StyledFormBox sx={{width: '88ch'}}>
                    <Paper sx={{m: 3, p: 5}}>
                        <Typography variant="subtitle2" component="p">
                            Have an account?
                            <Link to='/accounts/login' style={{ textDecoration: 'none' }}> Log in</Link>
                        </Typography>
                    </Paper>
                </StyledFormBox>
            </Grid>
        </StyledColumnDividedBox>
    );
};

//StyledImageBox, StyledFormBox