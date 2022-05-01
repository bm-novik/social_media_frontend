// MUI
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";

// Components
import { FollowListItem, StyledAvatarWithDetailsList } from "../list/ListControl";
import { StyledSmallSizeModalBox } from "../boxs/BoxControl";
import { ModalHeader } from "../header/modal/ModalHeader";


export const _FollowingModal = ({ open, handleModalClick, data, isSuccess, isLoading, isUser }) => {

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

                        <StyledAvatarWithDetailsList
                            sx={{
                                '& .MuiList-root': {alignItems: 'center'},
                                '& .MuiListItem-root': {alignItems: 'center'}
                            }}
                        >
                            { isLoading && <p>loading...</p> }
                            {isSuccess
                                &&
                                data?.map(following => (
                                    <FollowListItem
                                        key={following.id}
                                        control={'following'}
                                        follow={following}
                                        isUser={isUser}
                                        handleModalClick={handleModalClick}
                                    />
                                ))
                            }
                        </StyledAvatarWithDetailsList>
                    </StyledSmallSizeModalBox>
                </Fade>
            </Modal>
        </div>
    )
}
