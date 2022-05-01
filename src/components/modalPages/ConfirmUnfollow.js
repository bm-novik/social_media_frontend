import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import {Avatar, Divider, Fade, ListItemButton, ListItemText, Stack} from "@mui/material";

import {MySecondary} from "../../utils/color-utils";
import {StyledSecondaryMenuTypography} from "../typography/Typography.styles";
import {StyledConfirmSmallSizeModalBox} from "../boxs/Box.styles";

export const ConfirmUnfollow = ({ open, handleModalClick, execute, object, text }) => {

    const handleConfirmClick = () => {
        execute({object_id: object.id})
        handleModalClick()
    }

    return (
        <Modal
            open={open}
            onClose={handleModalClick}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 500}}
        >
            <Fade in={open}>
                <StyledConfirmSmallSizeModalBox>
                    <Stack direction="column" spacing={2}
                           sx={{
                               justifyContent:'center',
                               alignContent: 'center',
                               alignItems: 'center',
                               height: '65%',
                            }}>
                        <Avatar
                            alt={object?.profile.first_name}
                            src={object?.profile.profile_pic}
                            sx={{ width: 92, height: 92 }}
                        />
                        <StyledSecondaryMenuTypography>
                            {text} @{object?.username}?
                        </StyledSecondaryMenuTypography>
                    </Stack>
                    <Divider/>
                    <ListItemButton
                        sx={{width: '100%'}}
                        onClick={handleConfirmClick}
                    >
                        <ListItemText sx={{'& .MuiTypography-root': {color: '#1976d2'}}}
                                      primary={text} />
                    </ListItemButton>


                    <Divider/><ListItemButton
                    sx={{width: '100%'}}
                    onClick={handleModalClick}
                >
                    <ListItemText sx={{'& .MuiTypography-root': {color: MySecondary}}}primary="cancel"/>
                </ListItemButton>


                </StyledConfirmSmallSizeModalBox>
            </Fade>
        </Modal>
    )

};
