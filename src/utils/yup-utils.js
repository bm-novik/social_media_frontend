import * as Yup from "yup";

const userName = Yup.string().min(5 | `User name must be less than 5 characters`).required('Required')
const email = Yup.string().email('Invalid email format').required('Required')
const password = Yup.string().required('Required')
const confirmPassword = Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required')
const name = Yup.string().min(2 | `User name must be less than 2 characters`).required('Required')

export const registerValidationSchema = Yup.object({
    email,
    password,
    confirmPassword,
    first_name: name,
    last_name: name
})

export const loginValidationSchema = Yup.object({
    userName,
    password,
})

