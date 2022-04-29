import {TextField} from "@mui/material";
import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {DatePicker, LocalizationProvider} from "@mui/lab";

// TODO check disableUnderline
export const DatePickerInput = (props) => {
    const {label, name, formik, variant="filled"} = props
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                openTo="day"
                views={['year', 'month', 'day']}
                // InputProps={{ disableUnderline: true }}
                onChange={(newValue) => {
                    formik.values[`${name}`] = newValue
                }}
                renderInput={(params) =>
                    <TextField
                    {...params}
                    variant={variant}
                    fullWidth
                    id={name}
                    name={name}
                    label={label}
                    formik={formik}
                    value={formik.values[`${name}`]}
                    onChange={formik.handleChange}
                    error={formik.touched[`${name}`] && Boolean(formik.errors[`${name}`])}
                    helperText={formik.touched[`${name}`] && formik.errors[`${name}`]}/>}
            />
        </LocalizationProvider>
    )
}

