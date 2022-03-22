import { applyMiddleware, createStore } from "redux"
import rootReducer from "./index"
import thunk from "redux-thunk"

export function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk))
}