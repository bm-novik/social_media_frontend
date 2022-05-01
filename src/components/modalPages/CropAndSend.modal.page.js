import {Cropper} from 'react-advanced-cropper'
import 'react-advanced-cropper/dist/style.css'
import {StyledInnerHeaderBox, StyledModalImageCropBox, StyledOuterHeaderBox} from "../boxs/Box.styles";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import { useRecoilValue, useSetRecoilState} from "recoil";
import { base64StringtoFile, extractImageFileExtensionFromBase64 } from "../../utils/image-utils";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { addBackNavigationSelector, NavbarAddAtom} from "../../recoil/atom/addAtom";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import {AuthenticatedAtom} from "../../recoil/atom/AtomStore";
import {LinearProgress, TextField} from "@mui/material";
import { useAddPostData } from "../../hooks/UseDataControl";
import {useQueryClient} from "react-query";

export const CropAndSend = ({ open }) => {
    // Global State management
    const queryClient = useQueryClient()
    const addNavbarAtom = useRecoilValue(NavbarAddAtom)
    const addBackSelector = useSetRecoilState(addBackNavigationSelector)
    const user = useRecoilValue(AuthenticatedAtom)

    // Local  State management
    const [canvas, setCanvas] = useState()
    const [content, setContent] = useState()

    // Use Query BoilerPlate
    const onSuccess = ({ data }) => {
        queryClient.invalidateQueries('usePostFeedList')
        queryClient.invalidateQueries('useProfilePostList')
        open()

        }
    const {mutate: postData, isLoading } = useAddPostData(onSuccess)

    // Extract file extension
    const [imgSrcExt, _] = useState(extractImageFileExtensionFromBase64(addNavbarAtom.imgSrc))
    // cropper.getCoordinates()

    // Save Crop data in state
    const handleOnChange = (cropper) => {
        setCanvas(cropper.getCanvas().toDataURL('image/' + imgSrcExt))
    };

    // Getter data and send
    const handleUploadClick = () => {
        // Create a file to be uploaded
        const myFilename = `${user.firstName}-${user.lastName}${new Date()}.${imgSrcExt}`
        const newCroppedFile = base64StringtoFile(canvas, myFilename)

        // Group data
        let formData = new FormData();
        formData.append('content', content);
        formData.append('image', newCroppedFile)
        postData(formData)
    }



return (
    <>
        <StyledOuterHeaderBox >
            <StyledInnerHeaderBox>
                <IconButton onClick={addBackSelector}
                            size="large"
                            color="inherit">
                    <ArrowBackOutlinedIcon/>
                </IconButton>
                <Box sx={{flexGrow: 1,}}/>
                <Typography id="transition-modal-title"
                            variant="h6"
                            component="h2"
                            color="inherit">
                    Crop
                </Typography>
                <Box sx={{flexGrow: 1,}}/>
                <Button variant="text"
                    // textTransform: 'none'
                        sx={{pr: 3}}
                        onClick={handleUploadClick}>
                    Send
                </Button>
            </StyledInnerHeaderBox>
            {isLoading && <LinearProgress sx={{backgroundColor: '#ec5990', color: '#ec5990'}}/>}
        </StyledOuterHeaderBox>

        <StyledModalImageCropBox>
            <Cropper
                src={addNavbarAtom.imgSrc}
                onChange={handleOnChange}
                className={'cropper'}
                stencilProps={{
                    handlers: {},
                    lines: {},
                    movable: false,
                    resizable: false,

                }}
                stencilSize={{
                    aspectRatio: 4 / 5,
                    width: 600,
                    height: 700
                }}
                imageRestriction="stencil"
            />
        </StyledModalImageCropBox>
        <Box sx={{position: 'absolute', width: '100%', bottom: '0px'}}>
            <TextField
                label={'Write a caption...'}
                name={'content'}
                type={'text'}
                value={content}
                rows={2}
                fullWidth
                variant="filled"
                multiline
                onChange={(e) => setContent(e.target.value)}
            />
        </Box>
    </>
);
}
;
