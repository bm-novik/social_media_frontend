import {useRecoilValue, useSetRecoilState} from "recoil";
import {AuthenticatedAtom} from "./recoil/atom/AtomStore";
import {useLocation, Navigate} from "react-router-dom";
import {useCheckAuthenticationData} from "./hooks/UseAuth.data";
import {BASE_URL} from "./utils/config";
export const AuthenticationCheck = ({children}) => {
    const authenticated = useRecoilValue(AuthenticatedAtom)
    const setAuth = useSetRecoilState(AuthenticatedAtom)
    const location = useLocation()

    const onSuccess = ({data}) => {
        setAuth(data =
            {
                profileId: data.id,
                nickname: data.username,
                firstName: data.profile.first_name,
                lastName: data.profile.last_name,
                image: `${BASE_URL}${data.profile.profile_pic}`,
                token: window.localStorage.getItem('token')
            }
        )
        return children
    }

    const onError = () => {
        // window.localStorage.removeItem('token')
        return (<Navigate to='/accounts/login' state={{ path: location.pathname }} />)
    }

    const {mutate, isSuccess} = useCheckAuthenticationData(onSuccess, onError)
    const extraStep = (token) => mutate(token)


    {/* Main */}
    if (!authenticated.token) {
        const localStorageToken = window.localStorage.getItem('token') || null

        if (localStorageToken) {
            extraStep(localStorageToken)
        }
        else if (!localStorageToken) {
            return <Navigate to='/accounts/login' state={{path: location.pathname}}/>
        }
    } else {
        return children
    }
    return isSuccess && children

}

