import {IconTab} from "./IconTab";
import {TextTab} from "./TextTab";


export const LabelControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'icon':
            return <IconTab {...rest} />
        case 'text':
            return <TextTab {...rest} />
        default:
            return null
    }
}
