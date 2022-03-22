
import * as actionTypes from "../actions/actionTypes"
import initalState from "./initialState"

export default function userReducer(state = initalState.token, action) {

    switch (action.type) {
        case actionTypes.CHANGE_TOKEN:
            return action.payload
        default:
            return state
    }
}