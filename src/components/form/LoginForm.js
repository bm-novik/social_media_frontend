import {useFormik} from 'formik'
import {FieldControl} from "../formField/FormControl";

import {useLoginData} from "../../hooks/UseAuth.data";
import {loginValidationSchema} from "../../utils/yup-utils";
import Box from "@mui/material/Box";
import {FormSubmitButton} from "../button/Button.styles";
import {Stack} from "@mui/material";


export function LoginForm() {
    // TODO Error handling

    // Use Query BoilerPlate
    const {mutate: loginData } = useLoginData()
    const onSubmit = (values) => {
        loginData(values)
    }

    // Formik BoilerPlate
    const initialValues = {
        username: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: loginValidationSchema,
        onSubmit,
    });

    return (

            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <Stack spacing={1}>
                    <Box key={'loginBox'} sx={{'& .MuiTextField-root': { my: 2, alignItems: 'start', display:'flex',spacing:1, width: '55ch', justifyContent:'flexStart'},}}>
                <FieldControl
                    control='input'
                    formik={formik}
                    label='User Name OR Email'
                    name='username'
                    type="text"
                />
                <FieldControl
                    control='input'
                    formik={formik}
                    label='Password'
                    name='password'
                    type="Password"
                />
                <FormSubmitButton type='submit'
                    // sx={{ '&:hover': {color: '#ec5990', background: '#ec5990', border: 1 }}}
                >
                        Login</FormSubmitButton>
                    </Box>
                </Stack>
            </form>

    );
};
