import {useForm} from "react-hook-form";
import React, {useState} from "react";
import Header from "../header/Header";
import {MUICheckbox, MUIPicker, MUIRadioGroup, MUISelect, MUISlider, MUISwitch, MUITextField} from "../formField/Mui";
import {Container} from "@material-ui/core";
import FormSubmitButton from "./button";


let renderCount = 0;
const defaultValues = {
    firstName: "",
    lastName: "",
    select: "",
    bDay: "",
    Checkbox: false,
    radio: 'Male',
    switch: false,
    slider: 0
}


const FormTest = () => {

    const { handleSubmit, reset, setValue, control } = useForm( { defaultValues });
    const [data, setData] = useState(null);

    renderCount++;



    if (data) console.log(data)
    return (

        <form onSubmit={handleSubmit((data) => setData(data))} className="form">
            <Container>
                <Header renderCount={renderCount} />
                {/*<MUIPicker control={control} name={'firstName'} />*/}
                {/*<MUICheckbox control={control} name={'Checkbox'} />*/}
                {/*<MUIRadioGroup control={control} name={'radio'} FormControlLabelValues={['Male', 'Female']} />*/}
                {/*<MUISelect control={control} name={'bDay'} MenuItemValues={[10, 20, 30]} />*/}
                <MUITextField control={control} name={'firstName'} />
                {/*<MUISwitch control={control} name={'switch'} />*/}

                {/*<MUISlider control={control} name={'slider'} min={0} max={10} step={1} />*/}
            </Container>
            <FormSubmitButton />
        </form>
    );
};

export default FormTest