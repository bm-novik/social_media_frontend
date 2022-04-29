import {selector} from "recoil";
import {LinearLoadingProgressAtom, NavbarAvatarAtom, NavbarNotificationAtom} from "./AtomStore";

export const notificationSelector = selector({
    key: 'notificationSelector',
    get: ({get}) => {
        return get(NavbarNotificationAtom)
    },
    set: ({set, get}, e) => {
        let notificationState = get(NavbarNotificationAtom)

        if (notificationState.anchorEl) {
            set(NavbarNotificationAtom, {
                    active: false,
                    anchorEl: null,
                    refFetch: false
                }
            )
        } else {
            set(NavbarNotificationAtom, {
                active: true,
                anchorEl: e.currentTarget,
                refFetch: true
            })
        }
    }
})


export const avatarSelector = selector({
    key: 'avatarSelector',
    get: ({get}) => {
        return get(NavbarAvatarAtom)
    },
    set: ({set, get}, e) => {
        let notificationState = get(NavbarAvatarAtom)

        if (notificationState.anchorEl) {
            set(NavbarAvatarAtom, {
                    active: false,
                    anchorEl: null,
                }
            )
        } else {
            set(NavbarAvatarAtom, {
                active: true,
                anchorEl: e.currentTarget,
            })
        }
    }
})

export const LoadingSelector = selector({
    key: 'loadingSelector',
    get: ({get}) => {
        return get(LinearLoadingProgressAtom)
    },
    set: ({set, get}, e) => {
        let loadingState = get(LinearLoadingProgressAtom)
        if (loadingState === 'block') {
            set(LinearLoadingProgressAtom, 'none')
        } else {
            set(LinearLoadingProgressAtom, 'block')
        }
    }
})

