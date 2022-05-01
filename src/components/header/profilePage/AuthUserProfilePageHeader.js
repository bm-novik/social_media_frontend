import {Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {StyledProfileHeaderBox} from "../../boxs/Box.styles";
import {ProfileModalButton, ProfileOutlinedButton} from "../../button/Button.styles";
import {ProfilePageImage} from "./ProfilePageImage";
import {ProfilePageNameAndBio} from "./ProfilePageNameAndBio";
import {StyledProfileButtonLineTypography} from "../../typography/TypographyControl";
import {useNavigate} from "react-router-dom";
import {UpdateProfilePictureModal} from "../../modalPages/UpdateProfilePicture.modal.page";
import {useState} from "react";

export const AuthUserProfilePageHeader = ({data, handleFollowModalClick}) => {
    const navigate = useNavigate()
    const [openUpdatePicture, setOpenUpdatePicture] = useState(false)

    const handleUpdatePictureModalClick = () => {
        setOpenUpdatePicture(!openUpdatePicture)
    }

    return (
        <>
            <UpdateProfilePictureModal open={openUpdatePicture} handleModalClick={handleUpdatePictureModalClick} />
            <StyledProfileHeaderBox sx={{width: '100%',}}>
                <Grid container rowSpacing={5} columnSpacing={{xs: 1, sm: 2, md: 3}}
                      sx={{minWidth: 275, backgroundColor: 'transference', justifyContent: 'center'}}>

                    <ProfilePageImage data={data} handleUpdatePictureModalClick={handleUpdatePictureModalClick}/>

                    <Grid item sx={{mt: '5px', width: '55ch'}}>

                        <StyledProfileButtonLineTypography
                            variant="h5"
                            component="div">
                            {data?.username}

                            <ProfileOutlinedButton variant="outlined" onClick={() => navigate('/accounts/edit')}>
                                Edit profile
                            </ProfileOutlinedButton>

                            <IconButton aria-label="settings" onClick={() => console.log('Settings click')}>
                                <SettingsOutlinedIcon/>
                            </IconButton>

                        </StyledProfileButtonLineTypography>

                        <StyledProfileButtonLineTypography
                            variant="subtitle1"
                            component="div">

                            {data?.profile?.post_count} posts
                            <ProfileModalButton onClick={() => handleFollowModalClick('user', 'follower')}>
                                {data?.profile?.followers_count} followers
                            </ProfileModalButton>
                            <ProfileModalButton onClick={() => handleFollowModalClick('user', 'following')}>
                                {data?.profile?.following_count} following
                            </ProfileModalButton>
                        </StyledProfileButtonLineTypography>

                        <ProfilePageNameAndBio data={data}/>
                    </Grid>
                </Grid>
            </StyledProfileHeaderBox>
        </>
    );
};
