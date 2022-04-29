import {Tab} from "@mui/material";

export const IconTab = ({value, label, setValue, icon , iconPosition='start'}) => {
    return (
        <>
            <Tab
                value={value}
                iconPosition={iconPosition}
                label={label}
                onClick={() => setValue(value)}
                icon={icon}
            />
        </>
    );
};
