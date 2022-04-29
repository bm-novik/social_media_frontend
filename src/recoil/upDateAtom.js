import {AuthenticatedAtom} from "./atom/AtomStore";
import {selectorFamily} from "recoil";

export const updateProfileDetailsAtom = selectorFamily({
    key: 'UpdateAuthenticatedState',
    set: ({ get, set }, { data }) => {

        const authData = get(data)
        console.log(data)
        const auth = get(AuthenticatedAtom)
        console.log(auth)
        set(auth, authData)


    },
});