import { combineReducers } from "redux"
import authReducer from "./authReducer"
import tokenReducer from "./tokenReducer"
import usercredReducer from "./usercredReducer"
import productsReducer from "./productReducer"
import categoriesReducer from "./categoryReducer"
export default combineReducers({ authReducer, tokenReducer, usercredReducer, productsReducer, categoriesReducer })