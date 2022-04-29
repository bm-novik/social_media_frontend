import {atom, selector} from "recoil";

export const NavbarAddAtom = atom({
    key: 'NavbarAddState',
    default: {
        active: false,
        stage: 1,
        imgSrc: null,
    }
});


export const addActiveSelector = selector({
    key: 'addActiveSelector',
    get: ({get}) => {
        return get(NavbarAddAtom)
    },
    set: ({set, get}, e) => {
        let addState = get(NavbarAddAtom)
        if (addState.active) {
            set(NavbarAddAtom, {
                    active: false,
                    stage: 1,
                    imgSrc: null,
                }
            )
        } else {
            set(NavbarAddAtom, {
                active: true,
                stage: 1,
                imgSrc: null,
            })
        }
    }
})

export const addImageSelector = selector({
    key: 'addImageSelector',
    get: ({get}) => {
        return get(NavbarAddAtom)
    },
    set: ({set, get}, file) => {
        // let imageState = get(NavbarAddAtom)
        // let newFileList = imageState.imgSrc
        // newFileList.push(file)

        set(NavbarAddAtom, {
            active: true,
            stage: 2,
            imgSrc: file,
        })
    }
})

export const addBackNavigationSelector = selector({
    key: 'addBackNavigationSelector',
    get: ({get}) => {
        return get(NavbarAddAtom)
    },
    set: ({set, get}, e) => {
        set(NavbarAddAtom, {
            active: true,
            stage: 1,
            imgSrc: null,
        })
    }
})