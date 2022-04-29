import axios from 'axios'
import {BASE_URL} from "./config";

export const loginClient = axios.create(
    {
        baseURL: BASE_URL,
        headers: {'Content-Type': 'application/json',
        }
    }
)



export const client = axios.create(
    {
        baseURL: BASE_URL,
        headers: {'Content-Type': 'application/json',
        }
    }
)

export const request = ({...options}) => {
    const localStorageToken = window.localStorage.getItem('token') || null
    if (localStorageToken){
        client.defaults.headers.common.Authorization = `token ${localStorageToken}`
    }
    const onSuccess = response => {
        return response
    }
    const onError = error => {
        return error
    }

    return client(options).then(onSuccess).catch(onError)
}

export const noBaseUrlClient = axios.create(
    {
        headers: {'Content-Type': 'application/json',
        }
    }
)

export const NoBaseURLRequest = ({...options}) => {
    const localStorageToken = window.localStorage.getItem('token') || null

    if (localStorageToken){
        noBaseUrlClient.defaults.headers.common.Authorization = `token ${localStorageToken}`
    }
    const onSuccess = response => response

    const onError = error => {
        console.log("Data: ", error.response.data)
        console.log("Status", error.response.status)
        console.log("Header", error.response.headers)
        return error
    }

    return client(options).then(onSuccess).catch(onError)
}