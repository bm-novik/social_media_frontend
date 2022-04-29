import {Grid} from "@mui/material";
import {StyledProfileHeaderBox} from "../../boxs/Box.styles";
import {ProfileColoredOutlinedButton, ProfileModalButton, ProfileOutlinedButton} from "../../button/Button.styles";
import {ProfilePageImage} from "./ProfilePageImage";
import {ProfilePageNameAndBio} from "./ProfilePageNameAndBio";
import {StyledProfileButtonLineTypography} from "../../typography/TypographyControl";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {useFollowCreateData, useFollowingDeleteData} from "../../../hooks/useProfile.data";
import {useQueryClient} from "react-query";


export const ProfilePageHeader = ({ data, handleFollowersModalClick, handleFollowingModalClick }) => {
    const queryClient = useQueryClient()

    const onSuccessRemove = () => {
        queryClient.invalidateQueries('useProfileDetail')
    }

    const onSuccessFollow = () => {
        queryClient.invalidateQueries('useProfileDetail')
    }
    const {mutate: deleteFollowingData} = useFollowingDeleteData(onSuccessRemove)
    const {mutate: createFollowingData} = useFollowCreateData(onSuccessFollow)

    return (
        <StyledProfileHeaderBox sx={{width: '100%',}}>
            <Grid container rowSpacing={5} columnSpacing={{xs: 1, sm: 2, md: 3}}
                  sx={{minWidth: 275, backgroundColor: 'transference', justifyContent: 'center'}}>

                <ProfilePageImage data={data} />

                <Grid item sx={{mt: '5px',width: '55ch' }}>

                    <StyledProfileButtonLineTypography
                        variant="h5"
                        component="div">
                        {data?.profile?.first_name} {data?.profile?.last_name}

                        {data?.profile?.follow_status ?
                            <ProfileOutlinedButton aria-label="Following" variant="outlined" onClick={() => deleteFollowingData({object_id: data.id})}>
                                <AccountCircleOutlinedIcon sx={{width: '0.7em', height: '0.7em', marginRight: '1ch'}}/>
                                Following
                            </ProfileOutlinedButton>
                            :
                            <ProfileColoredOutlinedButton aria-label="Follow" variant="outlined" onClick={() => createFollowingData({object_id: data.id})}>
                                Follow
                            </ProfileColoredOutlinedButton>
                        }
                    </StyledProfileButtonLineTypography>


                    <StyledProfileButtonLineTypography
                        variant="subtitle1"
                        component="div">

                        {data?.profile?.post_count} posts
                        <ProfileModalButton onClick={() => handleFollowersModalClick('other')}>
                            {data?.profile?.followers_count} followers
                        </ProfileModalButton>
                        <ProfileModalButton onClick={() => handleFollowingModalClick('other')}>
                            {data?.profile?.following_count} following
                        </ProfileModalButton>
                    </StyledProfileButtonLineTypography>

                    <ProfilePageNameAndBio data={data} />
                </Grid>
            </Grid>
        </StyledProfileHeaderBox>
    );
};
