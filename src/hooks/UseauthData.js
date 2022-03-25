import { useMutation, useQueryClient } from 'react-query'

import {client, request} from '../utils/axios-utils'



const loginRequest = userData => {
    return request({ url: '/login', method: 'post', data: userData })

}

export const useLoginData = options => {

    return useMutation('login', loginRequest, {
        onSuccess: (data, context, variables) => {
            // localStorage.setItem('token', data.data.token)
            // console.log("data from success: ", data)
        },
        onError: (error, variables, context) => {
            console.log("data from error: ", error, variables, context)
        }
    })
}

