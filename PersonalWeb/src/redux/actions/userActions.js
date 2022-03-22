import axios from "axios"
import * as actionTypes from "./actionTypes"

export const changeToken = (token) => {
    return {
        type: actionTypes.CHANGE_TOKEN,
        payload: token
    }
}
export const changeAuth = (auth) => {
    return {
        type: actionTypes.CHANGE_AUTH,
        payload: auth
    }
}
export const changeUserCred = (userCred) => {
    return {
        type: actionTypes.CHANGE_USER_CRED,
        payload: userCred
    }
}