import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import {Divider, Fade, Input, ListItemButton, ListItemText} from "@mui/material";
import {StyledExtraSmallSizeModalBox, StyledInnerHeaderBox, StyledOuterHeaderBox} from "../boxs/Box.styles";
import Typography from "@mui/material/Typography";
import {useUpdateProfilePictureData} from "../../hooks/useProfile.data";
import {useQueryClient} from "react-query";
import {useRecoilState} from "recoil";
import {AuthenticatedAtom} from "../../recoil/atom/AtomStore";
import {BASE_URL} from "../../utils/config";
import {MyPink, MySecondary} from "../../utils/color-utils";
import List from "@mui/material/List";

export const UpdateProfilePictureModal = ({open, handleModalClick}) => {
    const queryClient = useQueryClient()
    const [auth, setAuth] = useRecoilState(AuthenticatedAtom)

    const onSuccess = ({data}) => {
        queryClient.invalidateQueries('check-token')
        queryClient.invalidateQueries('useProfileDetail')
        setAuth(data =
            {
                profileId: auth.id,
                nickname: auth.username,
                firstName: auth.first_name,
                lastName: auth.last_name,
                image: `${BASE_URL}${data.profile.profile_pic}`,
                token: window.localStorage.getItem('token')
            }
        )

    }

    const {mutate} = useUpdateProfilePictureData(onSuccess)

    const changeHandler = (e) => {
        let formData = new FormData();
        formData.append('image', e.target.files[0])
        mutate(formData)
        handleModalClick()
    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleModalClick}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}
            >
                <Fade in={open}>
                    <StyledExtraSmallSizeModalBox>
                        <StyledOuterHeaderBox>
                            <StyledInnerHeaderBox sx={{justifyContent: 'center'}}>
                                <Typography id="transition-modal-title"
                                            sx={{paddingTop: '2ch', paddingBottom: '2ch'}}
                                            variant="h6"
                                            component="h2"
                                            color="inherit">
                                    Change Profile Photo
                                </Typography>
                            </StyledInnerHeaderBox>
                        </StyledOuterHeaderBox>



                            <List component="menu" aria-label="pictture-update-menu"
                            sx={{height:'27ch', display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>


                                <label htmlFor="contained-button-file">
                                    <Input sx={{display: 'none'}} onChange={changeHandler}  accept="image/*" id="contained-button-file" type="file"/>
                                    <ListItemButton
                                        sx={{width: '100%'}}
                                        // onClick={(event) => handleListItemClick(event, 2)}
                                    >
                                        <ListItemText sx={{'& .MuiTypography-root': {color: MyPink}}} primary="Upload Photo"  />
                                    </ListItemButton>
                                </label>

                                <Divider/>

                                <label htmlFor="none">
                                <ListItemButton
                                    sx={{width: '100%'}}
                                    // onClick={(event) => handleListItemClick(event, 2)}
                                >
                                    <ListItemText sx={{'& .MuiTypography-root': {color: '#1976d2'}}} primary="Remove Current Photo"/>
                                </ListItemButton>
                                </label>

                                <Divider/>

                                    <label htmlFor="none">
                                <ListItemButton
                                    sx={{width: '100%'}}
                                    onClick={() => handleModalClick(null)}
                                >
                                    <ListItemText sx={{'& .MuiTypography-root': {color: MySecondary}}}primary="cancel"/>
                                </ListItemButton>
                                    </label>
                            </List>



                    </StyledExtraSmallSizeModalBox>
                </Fade>
            </Modal>
        </>
    );
};
