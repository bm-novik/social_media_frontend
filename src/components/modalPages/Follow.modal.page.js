// MUI
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import {Fade} from "@mui/material";

// Components
import {FollowListItem, StyledAvatarWithDetailsList} from "../list/ListControl";
import {StyledSmallSizeModalBox} from "../boxs/Box.styles";
import {ModalHeader} from "../header/modal/ModalHeader";


export const FollowModal = ({ open, handleModalClick, data, isSuccess, isLoading, isUser, followState }) => {

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
                        <ModalHeader text={followState} handleModalClick={handleModalClick}/>

                        <StyledAvatarWithDetailsList sx={{
                            '& .MuiList-root': {alignItems: 'center'},
                            '& .MuiListItem-root': {alignItems: 'center'}
                        }}>
                            {/*TODO loading*/}
                            {isLoading && <p>loading...</p>}
                            {isSuccess
                                &&
                                data.map(follower => (
                                    <FollowListItem
                                        key={follower.id}
                                        control={followState}
                                        follow={follower}
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
    );
};
