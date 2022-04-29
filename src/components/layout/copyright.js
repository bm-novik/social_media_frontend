import Typography from "@mui/material/Typography";
import {Container, Grid, Link} from "@mui/material";
import Box from "@mui/material/Box";

export const Footer = () => {
    return (
        <Box px={{xs: 3, sm: 5}}
             py={{xs: 5, sm: 5}}
             bgcolor='transparent' color='black'
             position='fixed'
             bottom={0}
             width='100%'>
            <Container>
                <Grid container maxWidth='lg'>
                    <Grid item xs={12} sm={4}>

                    </Grid>
                </Grid>
                <Box textAlign='center'
                     pt={{xs: 5, sm: 5}}
                     pb={{xs: 5, sm: 5}}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="https://mui.com/">
                            TheSocialApp
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Box>
            </Container>
        </Box>


    );

};
