import {Fragment, useState} from 'react'
import {useFormik} from 'formik'
import {FieldControl} from "../formField/FormControl";
import {registerValidationSchema} from "../../utils/yup-utils";
import Box from "@mui/material/Box";
import {useRegisterData} from "../../hooks/UseAuth.data";
import {FormSubmitButton} from "../button/Button.styles";
import {Stack} from "@mui/material";
import {GenderPickModal} from "../modalPages/GenderPick.modal.page";


export const SignupForm = () => {
    const [openGenderModal, setOpenGenderModal] = useState(false)
    const [file, setfile] = useState()


    const handleGenderModalClick = (choice = null) => {
        if (openGenderModal) {
            if (choice === null) {
                formik.setFieldValue('gender', formik.values.gender)
            } else {
                formik.setFieldValue('gender', choice)
            }
        }
        setOpenGenderModal(!openGenderModal)
    }

    // Use Query
    const {mutate: singupData} = useRegisterData()

    const onSubmit = (values) => {
        let formData = new FormData()
        formData.append('profile_pic', (file === undefined) ? null : file)
        formData.append('username', values.username)
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('confirm_password', values.confirm_password)
        formData.append('first_name', values.first_name)
        formData.append('last_name', values.last_name)
        formData.append('phone', values.phone)
        formData.append('bio', values.bio)
        formData.append('website', values.website)
        formData.append('birth_day', values.birth_day)
        formData.append('gender', Object.keys(gender_dict).find(k => gender_dict[k] === values.gender))
        for (let x of formData){
            console.log(x)
        }

        singupData(formData)
    }

    const gender_dict = {
        0: 'Prefer not to say',
        1: 'Woman',
        2: 'Man',
        3: 'Non binary',
        4: 'I dont identify with any gender'
    }

    // Formik BoilerPlate
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        first_name: "",
        last_name: "",
        gender: gender_dict[0],
        website: '',
        bio: "",
        phone: '',
        profile_pic: null,
        birth_day: null

    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: registerValidationSchema,
        onSubmit,
    });

    return (
        <>
            <GenderPickModal open={openGenderModal}
                             genderState={formik.values.gender}
                             handleClick={handleGenderModalClick}
            />
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <Stack spacing={1}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <FieldControl
                            control='input'
                            formik={formik}
                            label='User Name'
                            name='username'
                            type="text"
                        />
                        <FieldControl
                            control='input'
                            formik={formik}
                            label='Email'
                            name='email'
                            type="text"
                        />
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <FieldControl
                            control='input'
                            formik={formik}
                            label='Password'
                            name='password'
                            type="password"
                        />
                        <FieldControl
                            control='input'
                            formik={formik}
                            label='Confirm Password'
                            name='confirm_password'
                            type="password"
                        />
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <FieldControl
                            control='input'
                            formik={formik}
                            label='First Name'
                            name='first_name'
                            type="text"
                        />
                        <FieldControl
                            control='input'
                            formik={formik}
                            label='Last Name'
                            name='last_name'
                            type="text"
                        />
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <FieldControl
                            control='input'
                            formik={formik}
                            label='Website'
                            name='website'
                            type="text"
                        />
                        <FieldControl
                            control='input'
                            formik={formik}
                            label='Phone'
                            name='phone'
                            type="text"
                        />
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <FieldControl
                                onClick={handleGenderModalClick}
                                control='modal'
                                formik={formik}
                                label='Gender'
                                name='gender'
                                type="text"
                            />

                        <FieldControl
                            control='file'
                            formik={formik}
                            label='Profile Picture'
                            name='profile_pic'
                            setfile={setfile}
                        />
                    </Box>

                    <Box sx={{'& .MuiTextField-root': {spacing: 1, width: '72ch'},}}>
                        <FieldControl
                            width='72ch'
                            control='date'
                            formik={formik}
                            label='Birth Date'
                            name='birth_day'
                        />
                    </Box>
                    <Box sx={{'& .MuiTextField-root': {spacing: 1, width: '72ch'},}}>
                        <FieldControl
                            control='textarea'
                            formik={formik}
                            label='Bio'
                            name='bio'
                            type="text"
                        />
                        <FormSubmitButton type='submit'>Sign up</FormSubmitButton>
                    </Box>

                </Stack>
            </form>
        </>
    );
};


