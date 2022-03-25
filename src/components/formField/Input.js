import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import {TextField, FormControl} from "@mui/material";


function Input (props) {
    const { label, name, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default Input



