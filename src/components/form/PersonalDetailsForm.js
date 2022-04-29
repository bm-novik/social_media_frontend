import {useFormik} from "formik";
import Box from "@mui/material/Box";
import {FieldControl} from "../formField/FormControl";
import React, {useState} from "react";
import {Avatar, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {
    StyledTabPaneLabelGridItem,
    StyledTabPaneRowGridContainer
} from "../grid/GridControl";
import {useProfileDetailData} from "../../hooks/useProfile.data";
import Button from "@material-ui/core/Button";
import {MyPink} from "../../utils/color-utils";
import {StyledSecondaryMenuTypography, StyledSLabelMenuTypography} from "../typography/Typography.styles";
import {SmallSubmitButton, StyledPinkTextButton} from "../button/Button.styles";
import {updateValidationSchema} from "../../utils/yup-utils";
import {useUpdateProfileData} from "../../hooks/UseAuth.data";
import {GenderPickModal} from "../modalPages/GenderPick.modal.page";
import {UpdateProfilePictureModal} from "../modalPages/UpdateProfilePicture.modal.page";


export const PersonalDetailsForm = ({setOpenAlert, setMessage, setSeverity, user, navigate}) => {

    //State management
    const [openGenderModal, setOpenGenderModal] = useState(false)
    const [openUpdatePicture, setOpenUpdatePicture] = useState(false)

    const handleUpdatePictureModalClick = () => {
        setOpenUpdatePicture(!openUpdatePicture)
    }

    const handleGenderModalClick = (choice = null) => {
        if (openGenderModal) {
            if (choice === null) {
                formik.setFieldValue('gender', formik.values.gender)
            } else {
                formik.setFieldValue('gender', choice)
            }
        }
        setOpenGenderModal(!openGenderModal)
        }




    // Query hooks
    const {mutate: UpdateProfileData} = useUpdateProfileData(
        ({data}) => {
            setMessage('Profile has changed successfully')
            setSeverity('success')
            setOpenAlert(true)
            formik.resetForm()
        },
        ({error}) => {
            setMessage(error)
            setSeverity('error')
            setOpenAlert(true)
        })

    const {data} = useProfileDetailData(user.profileId)


    const onSubmit = (values) => {
        const infoData = {
            user: {
                username: values.username,
                email: values.email
            },
            profile: {
                website: values.website,
                bio: values.bio,
                first_name: values.first_name,
                last_name: values.last_name,
                phone: values.phone,
                gender: Object.keys(gender_dict).find(k => gender_dict[k] === values.gender),
                birth_day: values.birth_day
            }
        }

        UpdateProfileData(infoData)
    }

    const gender_dict = {
        0: 'Prefer not to say',
        1: 'Woman',
        2: 'Man',
        3: 'Non binary',
        4: 'I dont identify with any gender'
    }

    // Formik BoilerPlate
    const initialValues = {
        username: data?.data.username || '',
        website: data?.data?.profile.website || '',
        bio: data?.data?.profile.bio || '',
        first_name: data?.data?.profile.first_name || '',
        last_name: data?.data?.profile.last_name || '',
        email: data?.data.email || '',
        phone: data?.data?.profile.phone || '',
        gender: gender_dict[data?.data?.profile.gender] || '',
        birth_day: data?.data?.profile.birth_day || ''
    }


    const formik = useFormik({
        enableReinitialize: true,
        initialValues,
        validationSchema: updateValidationSchema,
        onSubmit,
    });

    const EmptyBlock = () => {
        return (
            <Grid item xs={3} sx={{marginBottom: '8px'}}>
                <Box sx={{flexBasis: '100%'}}/>
            </Grid>
        )
    }

    return (
        <>
            {/* MODALS*/}
            <GenderPickModal open={openGenderModal}
                             genderState={formik.values.gender}
                             handleClick={handleGenderModalClick}
            />
            <UpdateProfilePictureModal open={openUpdatePicture} handleModalClick={handleUpdatePictureModalClick}/>
            {/* LAYOUT*/}
            <Grid container component='form' autoComplete="off" onSubmit={formik.handleSubmit}>
                <StyledTabPaneRowGridContainer container>
                    <StyledTabPaneLabelGridItem item xs={3}>
                        <Avatar
                            sx={{cursor: 'pointer'}}
                            onClick={() => navigate(`/${user.profileId}`)}
                            alt={data?.data?.profile.first_name} src={data?.data?.profile.profile_pic}/>
                    </StyledTabPaneLabelGridItem>

                    <Grid item xs={6}>
                        <Typography
                            onClick={() => navigate(`/${user.profileId}`)}
                            sx={{fontFamily: 'QuickSand', mt: '1.56ch', fontSize: '2.5ch', cursor: 'pointer'}}>
                            {data?.data.username}
                        </Typography>
                        <Typography sx={{fontFamily: 'QuickSand'}}>
                            <Button
                                onClick={handleUpdatePictureModalClick}
                                variant='text'
                                style={{
                                    color: MyPink,
                                    textTransform: 'unset',
                                    fontFamily: 'QuickSand',
                                    backgroundColor: "transparent",
                                    paddingLeft: 0,
                                    paddingTop: 0
                                }}>
                                Change Profile Photo
                            </Button>
                        </Typography>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>

                    <StyledTabPaneLabelGridItem item xs={3}>
                        <StyledSLabelMenuTypography>
                            Nick Name
                        </StyledSLabelMenuTypography>
                    </StyledTabPaneLabelGridItem>

                    <Grid item xs={6}>
                        <FieldControl
                            size="small"
                            control='input'
                            formik={formik}
                            variant='outlined'
                            name='username'
                            type="text"/>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <EmptyBlock/>
                    <StyledSecondaryMenuTypography sx={{width: '51ch'}}>
                        This will be used as your user name when login into the site
                    </StyledSecondaryMenuTypography>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>


                <StyledTabPaneRowGridContainer container>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <StyledTabPaneLabelGridItem item xs={3}>
                        <StyledSLabelMenuTypography>
                            Website
                        </StyledSLabelMenuTypography>
                    </StyledTabPaneLabelGridItem>
                    <Grid item xs={6}>
                        <FieldControl
                            size="small"
                            control='input'
                            formik={formik}
                            variant='outlined'
                            name='website'
                            type="text"/>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <StyledTabPaneLabelGridItem item xs={3}>
                        <StyledSLabelMenuTypography>
                            Bio
                        </StyledSLabelMenuTypography>
                    </StyledTabPaneLabelGridItem>
                    <Grid item xs={6}>
                        <FieldControl
                            size="small"
                            control='textarea'
                            formik={formik}
                            variant='outlined'
                            name='bio'
                            type="text"/>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <EmptyBlock/>
                    <div>
                        <StyledSecondaryMenuTypography sx={{width: '51ch', fontWeight: 600}}>
                            Personal Information
                        </StyledSecondaryMenuTypography>
                        <StyledSecondaryMenuTypography sx={{width: '51ch'}}>
                            Provide your personal information, even if the account is used for a business, a pet or
                            something else. This won't be a part of your public profile.
                        </StyledSecondaryMenuTypography>
                    </div>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <StyledTabPaneLabelGridItem item xs={3}>
                        <StyledSLabelMenuTypography>
                            First Name
                        </StyledSLabelMenuTypography>
                    </StyledTabPaneLabelGridItem>
                    <Grid item xs={6}>
                        <FieldControl
                            size="small"
                            control='input'
                            formik={formik}
                            variant='outlined'
                            name='first_name'
                            type="text"/>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <StyledTabPaneLabelGridItem item xs={3}>
                        <StyledSLabelMenuTypography>
                            Last Name
                        </StyledSLabelMenuTypography>
                    </StyledTabPaneLabelGridItem>
                    <Grid item xs={6}>
                        <FieldControl
                            size="small"
                            control='input'
                            formik={formik}
                            variant='outlined'
                            name='last_name'
                            type="text"/>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <StyledTabPaneLabelGridItem item xs={3}>
                        <StyledSLabelMenuTypography>
                            Email
                        </StyledSLabelMenuTypography>
                    </StyledTabPaneLabelGridItem>
                    <Grid item xs={6}>
                        <FieldControl
                            size="small"
                            control='input'
                            formik={formik}
                            variant='outlined'
                            name='email'
                            type="text"/>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <StyledTabPaneLabelGridItem item xs={3}>
                        <StyledSLabelMenuTypography>
                            Phone Number
                        </StyledSLabelMenuTypography>
                    </StyledTabPaneLabelGridItem>
                    <Grid item xs={6}>
                        <FieldControl
                            size="small"
                            control='input'
                            formik={formik}
                            variant='outlined'
                            name='phone'
                            type="text"/>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <StyledTabPaneLabelGridItem item xs={3}

                    >
                        <StyledSLabelMenuTypography
                        >
                            Gender
                        </StyledSLabelMenuTypography>
                    </StyledTabPaneLabelGridItem>
                    <Grid item xs={6}
                          onClick={handleGenderModalClick}
                    >
                        <FieldControl
                            size="small"
                            control='input'
                            formik={formik}
                            variant='outlined'
                            name='gender'
                            type="text"/>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>

                <StyledTabPaneRowGridContainer container>
                    <StyledTabPaneLabelGridItem item xs={3}>
                        <StyledSLabelMenuTypography>
                            Birth Day
                        </StyledSLabelMenuTypography>
                    </StyledTabPaneLabelGridItem>
                    <Grid item xs={6}>
                        <FieldControl
                            size="small"
                            variant='outlined'
                            control='date'
                            formik={formik}
                            name='birth_day'
                            type="text"/>
                    </Grid>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>


                <StyledTabPaneRowGridContainer container sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'flexStart',
                }}>
                    <EmptyBlock/>
                    <SmallSubmitButton type='submit'
                                       style={{width: '16ch', marginRight: '30ch'}}>Submit</SmallSubmitButton>
                    <StyledPinkTextButton variant='text'>Im DONE disable my account</StyledPinkTextButton>
                    <EmptyBlock/>
                </StyledTabPaneRowGridContainer>
            </Grid>
        </>
    );
};



