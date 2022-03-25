import {FormControl, FormHelperText, FormLabel, InputLabel, TextField} from "@mui/material";
import React from "react";
import Input from "./Input";

export function MUIInput (props) {
    const { label, name, ...rest } = props
    return (
        <TextField name={name}  >
            {({ field, form }) => (
                <FormControl >
                    <InputLabel shrink htmlFor={name}>{label}</InputLabel>
                    <Input id={name} error={form.errors[name]} {...rest} {...field} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
        )}
        </TextField>
    )
}

// export const MUIInput = ({ name, ...otherProps }) => {
//     console.log(otherProps)
//     const [field, mata] = useField(name);
//
//     const configTextfield = {
//         ...field,
//         ...otherProps,
//         fullWidth: true,
//         variant: 'outlined'
//     };
//
//     if (mata && mata.touched && mata.error) {
//         configTextfield.error = true;
//         configTextfield.helperText = mata.error;
//     }
//
//     return (
//         <TextField {...configTextfield} />
//     );
// };
//
