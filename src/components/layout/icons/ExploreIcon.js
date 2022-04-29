import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import IconButton from "@mui/material/IconButton";
import ExploreIcon from '@mui/icons-material/Explore';
import {useRecoilValue} from "recoil";
import {NavbarExploreAtom} from "../../../recoil/atom/AtomStore";
import {useNavigate} from "react-router-dom";

export const ExploreIconButton = () => {

    const navigate = useNavigate()
    const exploreState = useRecoilValue(NavbarExploreAtom)

    return (
        <IconButton
            size="large"
            color="inherit"
            onClick={() => navigate('/explore')}
        >

            {exploreState.active ? <ExploreIcon /> : <ExploreOutlinedIcon/>}
        </IconButton>
    )
}