// MUI
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import {Fade} from "@mui/material";

// Components
import {FollowersListItem} from "../list/ListControl";
import {StyledAvatarWithDetailsList} from "../list/List.styles";
import {StyledSmallSizeModalBox} from "../boxs/Box.styles";
import {ModalHeader} from "../header/modal/ModalHeader";

export const FollowersModal = ({open, handleModalClick, data, isSuccess, isLoading, isUser}) => {

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
                        <ModalHeader text={'Followers'} handleModalClick={handleModalClick}/>

                        <StyledAvatarWithDetailsList sx={{
                            '& .MuiList-root': {alignItems: 'center'},
                            '& .MuiListItem-root': {alignItems: 'center'}
                        }}>
                            {isLoading && <p>loading...</p>}
                            {isSuccess
                                &&
                                data.map(follower => (

                                    <FollowersListItem key={follower.id} follower={follower}
                                                       handleModalClick={handleModalClick} isUser={isUser}/>

                                ))
                            }
                        </StyledAvatarWithDetailsList>
                    </StyledSmallSizeModalBox>
                </Fade>
            </Modal>
        </div>
    );
};
