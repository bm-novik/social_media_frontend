import axios from 'axios'

export const client = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {'Content-Type': 'application/json'}
})

export const request = ({ ...options }) => {
    // client.defaults.headers.common.Authorization = `token ${window.localStorage.getItem('token')}`
    const onSuccess = response => response
    const onError = error => {
        console.log("in axios", error)
        return error
    }

    return client(options).then(onSuccess).catch(onError)
}