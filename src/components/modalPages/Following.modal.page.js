// MUI
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";

// Components
import { FollowingListItem, StyledAvatarWithDetailsList } from "../list/ListControl";
import { StyledSmallSizeModalBox } from "../boxs/BoxControl";
import { ModalHeader } from "../header/modal/ModalHeader";

export const FollowingModal = ({ open, handleModalClick, data, isSuccess, isLoading, isUser }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleModalClick}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}
            >
                <Fade in={open}>
                    <StyledSmallSizeModalBox>
                        <ModalHeader text={'Following'} handleModalClick={handleModalClick} />


                        <StyledAvatarWithDetailsList sx={{'& .MuiList-root': {alignItems: 'center'}, '& .MuiListItem-root': {alignItems: 'center'}}} >
                            { isLoading && <p>loading...</p> }
                            {isSuccess
                                &&
                                data?.map(following => (
                                    <FollowingListItem key={following.id} following={following} handleModalClick={handleModalClick} isUser={isUser}/>
                                ))
                            }
                        </StyledAvatarWithDetailsList>
                    </StyledSmallSizeModalBox>
                </Fade>
            </Modal>
        </div>
    )
}
