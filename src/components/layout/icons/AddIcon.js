import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {addActiveSelector, NavbarAddAtom} from "../../../recoil/atom/addAtom";
import AddCircleIcon from '@mui/icons-material/AddCircle';


export const AddIconButton = () => {
    const setAddNavbar = useSetRecoilState(addActiveSelector)
    const addState = useRecoilValue(NavbarAddAtom)


    return (
        <IconButton
            onClick={setAddNavbar}
            size="large"
            color="inherit"
        >
            <Badge color="secondary">
                {addState.active ? <AddCircleIcon /> : <AddCircleOutlineOutlinedIcon />}
            </Badge>
        </IconButton>
    )
}