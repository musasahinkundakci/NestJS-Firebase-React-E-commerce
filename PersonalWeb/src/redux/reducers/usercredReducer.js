import * as actionTypes from "../actions/actionTypes"
import initalState from "./initialState"

export default function userReducer(state = initalState.user_cred, action) {
    switch (action.type) {
        case actionTypes.CHANGE_USER_CRED:
            return action.payload
        default:
            return state
    }
}