import {TabContext, TabList, TabPanel} from '@mui/lab'
import {Collapse, Container} from "@mui/material";
import {PersonalDetailsForm} from "../components/form/PersonalDetailsForm";
import {
    StyledEditProfileFormBox,
    StyledEditProfileMenuBox,
    StyledEditProfileTabsMenuBox
} from "../components/boxs/Box.styles";
import {UpdatePasswordForm} from "../components/form/UpdatePasswordForm";
import {useRecoilValue} from "recoil";
import {AuthenticatedAtom} from "../recoil/atom/AtomStore";
import {useNavigate} from "react-router-dom";
import {FormAlert} from "../components/layout/Alert";
import {UpdateFormTabControl} from "../components/tabs/UpdateFormTabControl";
import {useState} from "react";


export const EditProfilePage = () => {
    // Global state management
    const user = useRecoilValue(AuthenticatedAtom)
    const navigate = useNavigate()

    //Local state management
    const [value, setValue] = useState('1');
    const [openAlert, setOpenAlert] = useState(false)
    const [message, setMessage] = useState(null)
    const [severity, setSeverity] = useState('success')


    const handleTabChange = (newValue) => {
        setValue(newValue);
    }

    return (
        <Container>
            <StyledEditProfileMenuBox>

                <TabContext value={value}>
                    <StyledEditProfileTabsMenuBox>
                        <UpdateFormTabControl handleChange={handleTabChange}/>
                    </StyledEditProfileTabsMenuBox>



                    <StyledEditProfileFormBox>
                        <Collapse sx={{width:'100%'}} in={openAlert}>
                            <FormAlert severity={severity} setOpen={setOpenAlert} message={message} />
                        </Collapse>
                        <TabPanel value='1'><PersonalDetailsForm setOpenAlert={setOpenAlert} setMessage={setMessage} setSeverity={setSeverity} user={user} navigate={navigate} /></TabPanel>
                        <TabPanel value='2'><UpdatePasswordForm setOpenAlert={setOpenAlert} setMessage={setMessage} setSeverity={setSeverity} user={user} navigate={navigate} /> </TabPanel>


                    </StyledEditProfileFormBox>
                </TabContext>
            </StyledEditProfileMenuBox>
        </Container>
    );
}

