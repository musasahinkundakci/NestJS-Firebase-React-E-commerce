import * as actionTypes from "../actions/actionTypes"
import initalState from "./initialState"

export default function categoriesReducer(state = initalState.categories, action) {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
        default:
            return state
    }
}