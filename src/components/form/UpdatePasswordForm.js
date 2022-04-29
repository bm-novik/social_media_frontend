import {Avatar, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import {useFormik} from "formik";

import {StyledSLabelMenuTypography} from "../typography/Typography.styles";
import {FieldControl} from "../formField/FormControl";
import {SmallSubmitButton, StyledPinkTextButton} from "../button/Button.styles";
import { useUpdatePasswordData} from "../../hooks/UseAuth.data";
import {updatePasswordValidationSchema} from "../../utils/yup-utils";
import {StyledTabPaneLabelGridItem, StyledTabPaneRowGridContainer} from "../grid/Grid.styles";

export const UpdatePasswordForm = ({ setOpenAlert, setMessage, setSeverity, user, navigate}) => {




    // Use Query BoilerPlate
    const onSuccess = () => {
        setMessage('Password has changed successfully')
        setSeverity('success')
        setOpenAlert(true)
        formik.resetForm()
    }

    const onError = (error) => {
        setMessage(error)
        setSeverity('error')
        setOpenAlert(true)
    }

    const {mutate: passwordData } = useUpdatePasswordData(onSuccess, onError)
    const onSubmit = (values) => {
        passwordData(values)

    }

    // Formik BoilerPlate
    const initialValues = {
        old_password: "",
        password: "",
        confirm_password: ""
    }

    const formik = useFormik({
        initialValues,
        validationSchema: updatePasswordValidationSchema,
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
        <Grid container component='form' autoComplete="off" onSubmit={formik.handleSubmit}>





            <StyledTabPaneRowGridContainer container>
                <StyledTabPaneLabelGridItem item xs={3}
                                            onClick={() => navigate(`/${user.profileId}`)}
                >
                    <Avatar alt={user.first_name} src={user.image}/>
                </StyledTabPaneLabelGridItem>

                <Grid item xs={6}>
                    <Typography sx={{fontFamily: 'QuickSand', mt: '1.56ch', fontSize:'2.5ch'}}>
                        {user.nickname}
                    </Typography>
                </Grid>

            </StyledTabPaneRowGridContainer>

            <StyledTabPaneRowGridContainer container>

                <StyledTabPaneLabelGridItem item xs={3}>
                    <StyledSLabelMenuTypography>
                        Old Password
                    </StyledSLabelMenuTypography>
                </StyledTabPaneLabelGridItem>

                <Grid item xs={6}>
                    <FieldControl
                        size="small"
                        control='input'
                        formik={formik}
                        variant='outlined'
                        name='old_password'
                        type="Password"/>
                </Grid>

            </StyledTabPaneRowGridContainer>

            <StyledTabPaneRowGridContainer container>

                <StyledTabPaneLabelGridItem item xs={3}>
                    <StyledSLabelMenuTypography>
                        New Password
                    </StyledSLabelMenuTypography>
                </StyledTabPaneLabelGridItem>

                <Grid item xs={6}>
                    <FieldControl
                        size="small"
                        control='input'
                        formik={formik}
                        variant='outlined'
                        name='password'
                        type="Password"/>
                </Grid>

            </StyledTabPaneRowGridContainer>

            <StyledTabPaneRowGridContainer container>

                <StyledTabPaneLabelGridItem item xs={3}>
                    <StyledSLabelMenuTypography>
                        Confirm Password
                    </StyledSLabelMenuTypography>
                </StyledTabPaneLabelGridItem>

                <Grid item xs={6}>
                    <FieldControl
                        size="small"
                        control='input'
                        formik={formik}
                        variant='outlined'
                        name='confirm_password'
                        type="Password"/>
                </Grid>
                <EmptyBlock/>

                <StyledTabPaneRowGridContainer
                    container sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'flexStart',
                }}
                >

                    <EmptyBlock/>
                    <SmallSubmitButton type='submit'
                                       style={{width: '16ch', marginRight: '30ch'}}>Submit</SmallSubmitButton>


                    <StyledPinkTextButton variant='text'>Forgot Password?</StyledPinkTextButton>


                </StyledTabPaneRowGridContainer>
            </StyledTabPaneRowGridContainer>
        </Grid>
    );
};
