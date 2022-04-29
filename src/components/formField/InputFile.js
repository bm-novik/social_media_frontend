import {TextField} from "@mui/material";
import React from "react";

// TODO check disableUnderline
export const InputFile =  (props) => {
    const { label, name, formik, setfile, variant="filled", size='' } = props
    const changeHandler = (e) => {
        setfile(e.target.files[0])
    }

    return (
        <>
            <TextField
                // InputProps={{ disableUnderline: true }}
                fullWidth
                autoComplete="off"
                variant={variant}
                id={name}
                size={size}
                name={name}
                label={label}
                type={'file'}
                formik={formik}
                value={formik.values[`${name}`]}
                onChange={changeHandler}
                // onChange={formik.handleChange}
                error={formik.touched[`${name}`] && Boolean(formik.errors[`${name}`])}
                helperText={formik.touched[`${name}`] && formik.errors[`${name}`]}
            />
            {/*<p>{formik.errors.name}</p>*/}
        </>
    )
}
