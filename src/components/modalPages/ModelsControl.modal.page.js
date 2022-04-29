import Typography from "@mui/material/Typography";
import {StyledPngModalBox} from "../boxs/Box.styles";
import {SmallSubmitButton} from "../button/Button.styles";
import React, {useEffect} from "react";
import {useDropzone} from "react-dropzone";

export const ImageUpload = ({handleUploadState}) => {

    // React-dropzone boilerPlate
    const {acceptedFiles, getRootProps, getInputProps, open} = useDropzone({
        noClick: true,
        accept: 'image/*',
        multiple: true,
    });


    useEffect(() => {
        if (acceptedFiles.length > 0) {

            const Reader = new FileReader()

            Reader.addEventListener("load", () => {
                const myResult = Reader.result
                handleUploadState(myResult)
            }, false)
            Reader.readAsDataURL(acceptedFiles[0])
        }
    }, [acceptedFiles, handleUploadState])


    return (
        <>
            <Typography id="transition-modal-title" variant="h6" component="h2">Creat new post</Typography>
            <hr/>
            <StyledPngModalBox
                // onDrop={handleOnDrop}
                {...getRootProps({className: 'dropzone'})}>
                <img
                    src={`${"/pngIcon/viewImagePlaceHolder5.png"}?w=596&fit=crop&auto=format`}
                    srcSet={`${"/pngIcon/viewImagePlaceHolder5.png"}?w=596&fit=crop&auto=format&dpr=2 2x`}
                    alt={'logo'}
                    loading="lazy"/>
                <input {...getInputProps()} />
                <SmallSubmitButton onClick={open}>Select from computer</SmallSubmitButton>
            </StyledPngModalBox>
        </>
    );
};

