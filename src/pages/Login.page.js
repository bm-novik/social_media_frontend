import {Grid, Paper} from "@mui/material";
import {LogoImage} from "../components/layout/icons/LogoImage";
import React from "react";
import {LoginForm} from "../components/form/LoginForm";
import Typography from "@mui/material/Typography";
import {StyledColumnDividedBox, StyledFormBox, StyledImageBox} from "../components/boxs/Box.styles";
import {LOGIN_PIC_ROOT} from "../utils/config";
import {Link} from 'react-router-dom'

export const Login = () => {
    return (
        <StyledColumnDividedBox sx={{ minHeight: "75vh"}}>
            <StyledImageBox >
                <img
                    width={'560 ch'}
                    src={`${LOGIN_PIC_ROOT}?w=596&fit=crop&auto=format`}
                    srcSet={`${LOGIN_PIC_ROOT}?w=596&fit=crop&auto=format&dpr=2 2x`}
                    alt={'logo'}
                    loading="lazy"/>
            </StyledImageBox>


            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">

                <StyledFormBox sx={{width: '72ch'}}>
                    <Paper sx={{m: 3, p: 5}}>
                        <LogoImage />
                        <LoginForm />
                    </Paper>
                </StyledFormBox >
                <StyledFormBox sx={{width: '72ch'}}>
                    <Paper sx={{m: 3, p: 5}}>
                        <Typography variant="subtitle2" component="p">
                            Don't have an account?
                            <Link to='/accounts/emailsignup' style={{ textDecoration: 'none' }}> Sign up</Link>
                        </Typography>
                    </Paper>
                </StyledFormBox>
            </Grid>
        </StyledColumnDividedBox>
    )
}