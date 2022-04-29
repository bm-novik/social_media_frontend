import {LabelControl} from "./iconTab/LableControl";
import React from "react";
import {TabList} from "@mui/lab";
import {makeStyles} from "@mui/styles";
import {MyPink} from "../../utils/color-utils";

const useStyle = makeStyles({
    indicator: {
        top: "0px",
        width: '0.1ch',
        backgroundColor: MyPink,
    }
})

export const UpdateFormTabControl = ({handleChange}) => {
    const classes = useStyle();


    return (
        <TabList
            classes={{
                indicator: classes.indicator
            }}
            onChange={handleChange}
            orientation="vertical"
            aria-label='Edit Profile Tabs'
            textColor='inherit'
            variant='scrollable'
            scrollButtons='auto'
        >
            <LabelControl
                control={'text'}
                label='Edit Profile'
                value='1'
                setValue={handleChange}
            />

            <LabelControl
                control={'text'}
                label='Change Password'
                value='2'
                setValue={handleChange}
            />
        </TabList>
    )
}
