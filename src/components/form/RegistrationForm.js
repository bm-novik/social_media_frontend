import React from 'react'
import { Formik, Form } from 'formik'
import {FieldControl} from "../formField/FormControl";
import {registerValidationSchema} from "../../utils/yup-utils";


function RegistrationForm () {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        first_name: '',
        last_name: '',
        city: '',
        country: '',
        bio: '',
        // birth_day: '',
        profile_pic: '',
    }



    const onSubmit = values => {
        console.log('Form data', values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registerValidationSchema}
            onSubmit={onSubmit}
        >
            {formik => {
                return (
                    <Form>
                        <FieldControl
                            control='mui-input'
                            type='text'
                            label='username'
                            name='username'
                        />
                        <FieldControl
                            control='mui-input'
                            type='text'
                            label='name'
                            name='Name'
                        />
                        {/*<FieldControl*/}
                        {/*    control='input'*/}
                        {/*    type='email'*/}
                        {/*    label='Email'*/}
                        {/*    name='email'*/}
                        {/*/>*/}
                        {/*<FieldControl*/}
                        {/*    control='input'*/}
                        {/*    type='password'*/}
                        {/*    label='Password'*/}
                        {/*    name='password'*/}
                        {/*/>*/}
                        {/*<FieldControl*/}
                        {/*    control='input'*/}
                        {/*    type='password'*/}
                        {/*    label='Confirm Password'*/}
                        {/*    name='confirm_password'*/}
                        {/*/>*/}
                        {/*<FieldControl*/}
                        {/*    control='input'*/}
                        {/*    type='text'*/}
                        {/*    label='First Name'*/}
                        {/*    name='first_name'*/}
                        {/*/>*/}
                        {/*<FieldControl*/}
                        {/*    control='input'*/}
                        {/*    type='text'*/}
                        {/*    label='Last Name'*/}
                        {/*    name='last_name'*/}
                        {/*/>*/}
                        {/*<FieldControl*/}
                        {/*    control='input'*/}
                        {/*    type='text'*/}
                        {/*    label='Country'*/}
                        {/*    name='country'*/}
                        {/*/>*/}
                        {/*<FieldControl*/}
                        {/*    control='input'*/}
                        {/*    type='text'*/}
                        {/*    label='City'*/}
                        {/*    name='city'*/}
                        {/*/>*/}
                        {/*<FieldControl*/}
                        {/*    control='textarea'*/}
                        {/*    type='text'*/}
                        {/*    label='Bio'*/}
                        {/*    name='bio'*/}
                        {/*/>*/}
                        {/*/!*<FieldControl*!/*/}
                        {/*/!*    control='date'*!/*/}
                        {/*/!*    type='text'*!/*/}
                        {/*/!*    label='birth_day'*!/*/}
                        {/*/!*    name='birth_day'*!/*/}
                        {/*/>*/}
                        {/*<FieldControl*/}
                        {/*    control='input'*/}
                        {/*    type='text'*/}
                        {/*    label='profile Pic'*/}
                        {/*    name='profile_pic'*/}
                        {/*/>*/}

                        <button type='submit'>
                            Submit
                        </button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default RegistrationForm



