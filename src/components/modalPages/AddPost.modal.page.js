import {useRecoilValue, useSetRecoilState} from "recoil";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {ImageUpload} from "./ModelsControl.modal.page";
import {StyledMidSizeModalBox} from "../boxs/Box.styles";
import {CropAndSend} from "./CropAndSend.modal.page";
import {NavbarAddAtom, addImageSelector, addActiveSelector} from "../../recoil/atom/addAtom";


export const AddPostModal = () => {
    // Recoil state
    const addNavbarAtom = useRecoilValue(NavbarAddAtom)
    const setAddNavbarSelector = useSetRecoilState(addActiveSelector)
    const imageStateSelector = useSetRecoilState(addImageSelector)

    return (
        <div>
            <Modal
                open={addNavbarAtom.active}
                onClose={setAddNavbarSelector}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}
            >
                <Fade in={addNavbarAtom.active}>
                    <StyledMidSizeModalBox >
                        {(addNavbarAtom.stage === 1) && <ImageUpload handleUploadState={imageStateSelector}/>}
                        {(addNavbarAtom.stage === 2) && <CropAndSend open={setAddNavbarSelector}/>}
                    </StyledMidSizeModalBox>
                </Fade>
            </Modal>
        </div>
    );
}
