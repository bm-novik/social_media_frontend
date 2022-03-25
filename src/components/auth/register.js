import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, Paper} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {MUITextField} from "../formField/Mui";
import {useForm} from "react-hook-form";
import FormSubmitButton from "../components/form/button";


const Register = () => {
    const navigate = useNavigate()


    const [data, setData] = useState(null);

    // React-Form-Hook Boiler-Plate
    const defaultValues = {
        userName: '' ,
        email: '',
        setEmail: '',
        password: '',
        confirmPassword: '',
        first: '',
        last: '',
        city: '',
        country: '',
        bio: '',
        image: '',
        birthDate: ''}
    const { handleSubmit, reset, setValue, control } = useForm( { defaultValues });

    {data && console.log(data);}

    return (
        <Box
            component="form"
            onSubmit={handleSubmit((data) => setData(data))}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                direction: "row",
                spacing: 2,
                gridTemplateColumns: {sm: '1fr 1fr'},
            }}
        >

            {/* picture */}
            <Paper variant="outlined" square width={350} key="pic" >
                <Grid item >
                    <img
                        height={550}
                        width= "100%"
                        src={`${'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'}?w=248&fit=crop&auto=format`}
                        srcSet={`${'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={'logo'}
                        loading="lazy" />
                </Grid>
            </Paper>

            {/* fields */}
            <Paper

                margin= 'auto'
                elevation= {0}
                sx={{m: 'auto', p: 2,  backgroundColor: 'transparent'}}>

                <Paper width= "100%" sx={{my: 2, mx: '2', p: 2,  }}>

                    <MUITextField control={control} name={'firstName'} />
                </Paper >

            <Paper variant="outlined"
                   square
                   display="grid"
                   sx={{ my: 2, mx: '2', p: 2 }} >

            </Paper>
                <FormSubmitButton />
            </Paper>

        </Box>
    );
}
export default Register