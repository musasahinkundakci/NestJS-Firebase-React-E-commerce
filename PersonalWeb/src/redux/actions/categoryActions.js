import axios from "axios";
import * as actionTypes from "./actionTypes";


export const getCategoriesSuccess = (categories) => {
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories
    }
}
export const getCategories = (token) => {
    console.log(token)
    return async function (dispatch) {
        console.log("categories")
        try {

            const categories = await axios({
                method: "GET",
                url: "http://localhost:5000/category",
                withCredentials: true,
                crossDomain: true,
                headers: {
                    authorization: token
                }
            });

            return dispatch(getCategoriesSuccess(categories.data));
        } catch (err) {
            console.log(err);
        }
    };
}