import {StyledInnerHeaderBox, StyledOuterHeaderBox} from "../../boxs/Box.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";

export const ModalHeader = ({ text, handleModalClick }) => {
 return (
     <StyledOuterHeaderBox>
         <StyledInnerHeaderBox>
             <Box sx={{flexGrow: 2,}}/>
             <Typography id="transition-modal-title"
                         variant="h6"
                         component="h2"
                         color="inherit">
                 {text}
             </Typography>
             <Box sx={{flexGrow: 1,}}/>
             <Button variant="text"
                     sx={{pr: 3}}
                     onClick={handleModalClick}
             >
                 x
             </Button>
         </StyledInnerHeaderBox>
     </StyledOuterHeaderBox>
 );
};
