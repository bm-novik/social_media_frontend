import {Grid} from "@mui/material";
import {StyledRoundImageBox} from "../../boxs/Box.styles";
import Image from "mui-image";

export const ProfilePageImage = ({data, handleUpdatePictureModalClick=null}) => {
 return (
     <Grid item sx={{width: '33ch'}}>
         <StyledRoundImageBox
             onClick={handleUpdatePictureModalClick}>
             <Image src={`${data?.profile?.profile_pic}`}/>
         </StyledRoundImageBox>
     </Grid>
 );
};
