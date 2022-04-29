import {atom} from "recoil";

export const AuthenticatedAtom = atom({
    key: 'AuthenticatedAtomState',
    default: {
        profileId: null,
        nickName: "",
        firstName: "",
        lastName: "",
        token: null,
        image:"",
    },
});

export const NavbarHomeAtom = atom({
    key: 'NavbarHomeState',
    default: {
        active: false,
    }
});

export const NavbarChatAtom = atom({
    key: 'NavbarChatState',
    default: {
        active: false,
    }
});



export const NavbarExploreAtom = atom({
    key: 'NavbarExploreState',
    default: {
        active: false,
    }
});

export const NavbarNotificationAtom = atom({
    key: 'NavbarNotificationState',
    default: {
            active: false,
            reFetch: false,
            anchorEl: null,
    }
});

export const NavbarAvatarAtom = atom({
    key: 'NavbarAvatarState',
    default: {
        active: false,
        anchorEl: null,
    }
});


export const LinearLoadingProgressAtom = atom({
    key: 'LoadingState',
    default: 'none'
});





