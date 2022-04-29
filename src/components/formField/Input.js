import {TextField} from "@mui/material";
import React from "react";

// TODO check disableUnderline
export const Input =  (props) => {
    const { label, name, formik, type, variant="filled", size='' } = props
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
            type={type}
            formik={formik}
            value={formik.values[`${name}`]}
            onChange={formik.handleChange}
            error={formik.touched[`${name}`] && Boolean(formik.errors[`${name}`])}
            helperText={formik.touched[`${name}`] && formik.errors[`${name}`]}
        />
            {/*<p>{formik.errors.name}</p>*/}
        </>
    )
}
