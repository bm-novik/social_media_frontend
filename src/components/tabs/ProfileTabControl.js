import {LabelControl} from "./iconTab/LableControl";
import {makeStyles} from "@mui/styles";
import {MyPink} from "../../utils/color-utils";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import {TabList} from "@mui/lab";


const useStyle = makeStyles({
    indicator: {
        top: "0px",
        height: 0.5,
        backgroundColor: MyPink,

    }
});


//MuiTabs-flexContainer -> justify-content: space-around;

export const ProfileTabsControl = ({handleChange}) => {
    const classes = useStyle();

    return (

        <TabList
            classes={{
                indicator: classes.indicator
            }}
            onChange={handleChange}
            aria-label="Profile page tabs"

        >
            <LabelControl
                control={'icon'}
                value={'post'}
                label={'POST'}
                setValue={handleChange}
                icon={<GridViewIcon/>}

            />

            <LabelControl
                control={'icon'}
                value={'save'}
                label={'SAVED'}
                setValue={handleChange}
                icon={<TurnedInNotIcon/>}
            />
            <LabelControl
                control={'icon'}
                value={'tagged'}
                label={'TAGGED'}
                setValue={handleChange}
                icon={<AccountBoxOutlinedIcon/>}
            />
        </TabList>
    )
}

