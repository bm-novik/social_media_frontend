import * as React from "react";
import {Controller} from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
    TextField,
    Checkbox,
    Select,
    MenuItem,
    Switch,
    RadioGroup,
    FormControlLabel,
    Radio,

    Slider
} from "@material-ui/core";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import {styled} from "@mui/material/styles";



const FormTextField = styled((props) => (
    <TextField InputProps={{disableUnderline: true}} {...props} variant="filled"  fullWidth />
))
(({theme}) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        backgroundColor: '#dedede',
    },
}));




export const MUIPicker = ({control, name}) => {
    {
        /*
        <MUIPicker control={control} name={''} />
        <MUICheckbox control={control} name={''} />
        <MUIRadioGroup control={control} name={''} FormControlLabelValues={['']} />
        <MUISelect control={control} name={''} MenuItemValues={[]} />
        <MUITextField control={control} name={''} />
        <MUISwitch control={control} name={''} />
        */
    }

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                    name={name}
                    control={control}
                    render={({field: {ref, ...rest}}) => (
                        <KeyboardDatePicker
                            margin="normal"
                            id={name}
                            label="Birth Date"
                            format="MM/dd/yyyy"
                            KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}
                            {...rest}
                        />
                    )}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};


export const MUICheckbox = ({control, name}) => {
    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <Checkbox
                        onChange={(e) => field.onChange(e.target.checked)}
                        checked={field.value}
                    >buzz</Checkbox>
                )}
            />
        </div>
    );
};

export const MUIRadioGroup = ({control, name, FormControlLabelValues}) => {
    return (
        <div>
            <Controller
                render={({field}) => (
                    <RadioGroup aria-label="gender" {...field}>

                        {FormControlLabelValues.map(value => (<FormControlLabel
                                                                value={value}
                                                                key={`${name}${value}`}
                                                                control={<Radio/>}
                                                                label={value}/>))}
                    </RadioGroup>
                )}
                name= {name}
                control={control}
                />



        </div>
    );
};


//className={classes.field}
//                     label={label}
//                     value={value}
//                     id={label}
//                     variant="filled"
//                     fullWidth
//                     onChange={(e) => set(e.target.value)}

export const MUITextField = ({control, name, register}) => {
    return (
        <div>
            <Controller
                render={({field}) => <FormTextField {...field} placeholder={name}/>}
                name={name}
                control={control}
                ref={register}
            />
        </div>
    );
};


export const MUISelect = ({control, name, MenuItemValues}) => {

    return (
        <div>
            <Controller
                render={({field}) => (
                    <Select {...field} placeholder={MenuItemValues[0]}>
                        {MenuItemValues.map(value => (<MenuItem value={value} key={`${name}${value}`}>
                            {value}
                        </MenuItem>))}
                    </Select>
                )}
                name={name}
                control={control}
            />
        </div>
    );
};


export const MUISwitch = ({control, name}) => {
    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <Switch
                        onChange={(e) => field.onChange(e.target.checked)}
                        checked={field.value}
                    />
                )}
            />
        </div>
    );
};


export const MUISlider = ({control, name, min, max, step}) => (
    <div>
        <Controller
            name={name}
            control={control}
            defaultValue={[0, 10]}
            render={({field}) => (
                <Slider
                    {...field}
                    onChange={(_, value) => {
                        field.onChange(value);
                    }}
                    valueLabelDisplay="auto"
                    min={min}
                    max={max}
                    step={step}
                />
            )}
        />
    </div>
);
