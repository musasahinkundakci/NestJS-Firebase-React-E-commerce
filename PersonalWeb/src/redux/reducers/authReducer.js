import * as actionTypes from "../actions/actionTypes"
import initalState from "./initialState"

export default function authReducer(state = initalState.auth, action) {

    switch (action.type) {

        case actionTypes.CHANGE_AUTH:
            return action.payload
        default:
            return state
    }
}