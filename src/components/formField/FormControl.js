import {Input} from "./Input";
import {DatePickerInput} from "./DatePicker";
import {TextareaField} from "./Textarea";
import {InputModal} from "./InputModal";
import {InputFile} from "./InputFile";


export const FieldControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'modal':
            return <InputModal {...rest} />
        case 'file':
            return <InputFile {...rest} />
        case 'textarea':
            return <TextareaField {...rest} />
        case 'date':
            return <DatePickerInput {...rest} />
        default:
            return null
    }
}
