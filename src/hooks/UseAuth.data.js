import {useMutation} from 'react-query'
import {client, loginClient, request} from '../utils/axios-utils'
import {useResetRecoilState, useSetRecoilState} from "recoil";

import {useNavigate} from "react-router-dom";
import {AuthenticatedAtom} from "../recoil/atom/AtomStore";
import {BASE_URL, IMAGE_URL} from "../utils/config";


/* ---- Axios clients ---- */
const loginRequest = userData => {
    return loginClient({url: '/login', method: 'post', data: userData})
}

const RegisterRequest = userData => {
    return client({url: '/register', method: 'post', data: userData})

}

const UpdatePasswordRequest = userData => {
    return request({url: '/update/password/', method: 'put', data: userData})

}

const UpdateProfileRequest = userData => {
    return request({url: '/update/info/', method: 'patch', data: userData})
}


const logoutRequest = () => {
    return request({url: '/logout/', method: 'post'})
}


const CheckTokenRequest = () => {

    return request({url: '/check_token', method: 'post'})
}

export const LogoutRequest = userData => {
    return request({url: '/logout', method: 'post', data: userData})
}


/* ---- ReactQuery hooks ---- */
export const useLoginData = options => {
    const setAuth = useSetRecoilState(AuthenticatedAtom)
    const navigate = useNavigate()

    return (
        useMutation('login', loginRequest,
            {
                onSuccess: ({data}) => {
                    console.log(data)
                    window.localStorage.setItem('token', data.token)
                    setAuth(
                        {
                            profileId: data.user.profile.id,
                            nickname: data.user.username,
                            firstName: data.user.profile.first_name,
                            lastName: data.user.profile.last_name,
                            image: `${data.user.profile.profile_pic}`,
                            token: data.token,
                        }
                    )
                    navigate('/')

                },
                onError: (error, variables, context) => {
                    console.log("data from error: ", error)
                }
            }
        )
    )
}


export const useRegisterData = options => {
    const setAuth = useSetRecoilState(AuthenticatedAtom)
    const navigate = useNavigate()
    return (
        useMutation('register', RegisterRequest,
            {
                onSuccess: ({data}) => {
                    window.localStorage.setItem('token', data.data.token)
                    setAuth(
                        {
                            profileId: data.user.profile.id,
                            nickname: data.user.username,
                            firstName: data.user.profile.first_name,
                            lastName: data.user.profile.last_name,
                            image: `${IMAGE_URL}${data.user.profile.profile_pic}`,
                            token: data.token,
                        }
                    )
                    navigate('/')
                },
                onError: (error, variables, context) => {
                    console.log("data from error: ", variables)
                }
            }
        )
    )
}


export const useLogoutData = options => {
    const navigate = useNavigate()
    const resetAuthAtom = useResetRecoilState(AuthenticatedAtom);
    return (
        useMutation('logout', logoutRequest,
            {
                onSuccess: ({data}) => {
                    window.localStorage.removeItem('token')
                    resetAuthAtom()
                    navigate('/accounts/login')
                },
                onError: () => {
                    window.localStorage.removeItem('token')
                    resetAuthAtom()
                    navigate('/accounts/login')
                }
            }
        )
    )
}


export const useCheckAuthenticationData = (onSuccess, onError) => {
    return (
        useMutation('check-token', CheckTokenRequest,
            {
                onSuccess,
                onError,
            }
        )
    )
}

export const useUpdatePasswordData = (onSuccess, onError) => {
    return (
        useMutation('useUpdatePassword', UpdatePasswordRequest,
            {
                onSuccess,
                onError,
            }
        )
    )
}

export const useUpdateProfileData = (onSuccess, onError) => {
    return (
        useMutation('useUpdateProfile', UpdateProfileRequest,
            {
                onSuccess,
                onError,
            }
        )
    )
}
