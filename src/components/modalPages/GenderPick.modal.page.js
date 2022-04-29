import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import {Fade, FormControl, RadioGroup} from "@mui/material";
import {
    StyledExtraSmallSizeModalBox,
    StyledInnerHeaderBox,
    StyledOuterHeaderBox,
} from "../boxs/Box.styles";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {FormSubmitButton} from "../button/ButtonControl";
import {StyledControlLabel, StyledPinkRadio} from "../formField/Radio";

export const GenderPickModal = ({open, genderState, handleClick}) => {
    const [value, setValue] = useState(genderState)

    return (
        <div>
            <Modal
                open={open}
                onClose={() => handleClick(genderState)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}
            >
                <Fade in={open}>
                    <StyledExtraSmallSizeModalBox
                    >
                        <StyledOuterHeaderBox>
                            <StyledInnerHeaderBox>
                                <Box sx={{flexGrow: 1, pl: 4.6}}/>
                                <Typography id="transition-modal-title"
                                            variant="h6"
                                            component="h2"
                                            color="inherit">
                                    Gender
                                </Typography>
                                <Box sx={{flexGrow: 1,}}/>
                                <Button variant="text"
                                        sx={{pr: 3}}
                                        onClick={() => handleClick(genderState)}
                                >
                                    x
                                </Button>
                            </StyledInnerHeaderBox>
                        </StyledOuterHeaderBox>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignContent: 'center',
                                //
                            }}>

                            <Box sx={{
                                justifyContent: 'flexStart', alignContent: 'flexStart',
                                width: '100%',
                                paddingBottom: '5.5ch',
                                paddingLeft: '4ch',
                            }}>
                                <FormControl

                                >
                                    <RadioGroup
                                        onChange={(e) => {
                                            setValue(e.target.value)
                                        }}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue={genderState}
                                        name="radio-buttons-group"
                                        spacing={2}
                                        value={value}
                                    >
                                        <StyledControlLabel value="Prefer not to say" control={<StyledPinkRadio/>}
                                                            label="Prefer not to say"/>
                                        <StyledControlLabel value="Woman" control={<StyledPinkRadio/>} label="Woman"/>
                                        <StyledControlLabel value="Man" control={<StyledPinkRadio/>} label="Man"/>
                                        <StyledControlLabel value="Non binary" control={<StyledPinkRadio/>}
                                                            label="Non binary"/>
                                        <StyledControlLabel value="I dont identify with any gender"
                                                            control={<StyledPinkRadio/>}
                                                            label="I dont identify with any gender"/>
                                    </RadioGroup>
                                </FormControl>

                            </Box>

                            <FormSubmitButton
                                type='submit'
                                onClick={() => handleClick(value)}
                                style={{
                                    height: '2ch',
                                    width: '90%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    bottom: '4ch',
                                    marginTop: '2ch',
                                }}>
                                Done
                            </FormSubmitButton>
                        </Box>

                    </StyledExtraSmallSizeModalBox>
                </Fade>
            </Modal>
        </div>
    );
};


