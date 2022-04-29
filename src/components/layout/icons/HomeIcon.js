import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {NavbarHomeAtom} from "../../../recoil/atom/AtomStore";

import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const HomeIconButton = () => {

    const navigate = useNavigate()
    const homeState = useRecoilValue(NavbarHomeAtom)

    return (
        <IconButton
            size="large"
            sx={{fontSize:'3ch'}}
            color="inherit"
            onClick={ () => navigate('/')}
        >
            {homeState.active ? <HomeIcon /> : <HomeOutlinedIcon />}
        </IconButton>
    );
};

