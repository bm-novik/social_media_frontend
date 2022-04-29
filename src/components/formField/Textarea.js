import {TextField} from "@mui/material";
import React from "react";

// TODO check disableUnderline
export const TextareaField =  (props) => {
    const { label, name, formik, type, rows=3, variant="filled"} = props
    return (
        <>
            <TextField
                // InputProps={{ disableUnderline: true }}
                fullWidth
                variant={variant}
                multiline
                rows={rows}
                id={name}
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
