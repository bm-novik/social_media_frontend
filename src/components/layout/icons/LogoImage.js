import Image from "mui-image";
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";


export const LogoImage = () => {
    const navigate = useNavigate()

 return (
     <Grid item sx={{width:'13ch', height: '3.5ch', cursor: 'pointer'}}
     onClick={() => navigate('/')}
     >
        <Image
            src={`/logo.png`}/>
     </Grid>
 );
};
