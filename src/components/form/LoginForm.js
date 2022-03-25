import React, {useState} from 'react'
import {Formik, Form, useFormikContext} from 'formik'
import {FieldControl} from "../formField/FormControl";
import { Link } from 'react-router-dom'
import {useLoginData} from "../../hooks/UseauthData";
import {loginValidationSchema} from "../../utils/yup-utils";



function LoginForm () {
    // State
    const [submitValue, SetSubmitValue] = useState('Submit');

    // Use Query
    const { mutate: loginData, isLoading, isError, error } = useLoginData()


    // Formik
    const initialValues = {
        username: '',
        password: ''
    }

    const onSubmit =( values, props )=> {
        loginData(values)
    }

    console.log("Error: ", isError)
    console.log("Loading: ", isLoading)




    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={loginValidationSchema}
            onSubmit={onSubmit}
        >
            {formik => {
                return (
                    <Form>
                        <FieldControl
                            control='input'
                            type='text'
                            label='User name'
                            name='username'
                        />
                        <FieldControl
                            control='input'
                            type='password'
                            label='Password'
                            name='password'
                        />
                        {isError && <p>{error.message}</p>}
                        <button type='submit'>{submitValue}</button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default LoginForm




 // TODO Error handling

//isError: boolean;
//     isIdle: boolean;
//     isLoading: boolean;
//     isSuccess: boolean;
//     mutate: MutateFunction<TData, TError, TVariables, TContext>;
//     reset: () => void;