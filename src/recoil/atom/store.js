import {atom} from "recoil";

export const profileDetailsAtom = atom({
    key: 'profileDetailState',
    default: {
        firstName: "",
        lastName: "",
        token: "",
        image:""
    },
});



