import * as Yup from "yup";
const websiteRegEx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm
const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const username = Yup.string('Enter your User Name').min(5, `User Name should be of minimum 5 characters length`).required('User Name is required')
const email = Yup.string('Enter your a valid Email address').email('Invalid email format').required('Email address is required')
const password = Yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required')
const confirm_password = Yup.string('Confirm your password').oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Confirm  password Required')
const name = Yup.string().min(2 | `User name must be less than 2 characters`).required('This field is Required')
const website = Yup.string().matches(websiteRegEx, 'URL is not valid')
const phone = Yup.string().matches(phoneRegEx, 'Phone number is not valid')

export const registerValidationSchema = Yup.object({
    username,
    website,
    email,
    password,
    phone,
    confirm_password,
    first_name: name,
    last_name: name
})

export const updateValidationSchema = Yup.object({
    username,
    website,
    email,
    phone,
    first_name: name,
    last_name: name
})

export const loginValidationSchema = Yup.object({
    username,
    password,
})

export const updatePasswordValidationSchema = Yup.object({
    old_password: password,
    password,
    confirm_password,
})

