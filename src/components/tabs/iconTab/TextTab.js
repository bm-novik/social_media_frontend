import {Tab} from "@mui/material";

export const TextTab = ({value, label, setValue}) => {
    return (
        <>
            <Tab
                style={{ alignItems: 'flex-start', marginLeft:'4ch' }}
                value={value}
                label={label}
                onClick={() => setValue(value)}
            />
        </>
    )
}
