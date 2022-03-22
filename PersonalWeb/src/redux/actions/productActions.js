import axios from "axios";
import * as actionTypes from "./actionTypes";


export const getProductsSuccess = (products) => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products
    }
}
export const getProducts = (token) => {
    console.log(token)
    return async function (dispatch) {

        try {
            const products = await axios({
                method: "GET",
                url: "http://localhost:5000/product/",
                withCredentials: true,
                crossDomain: true,
                headers: {
                    authorization: token
                }
            });

            return dispatch(getProductsSuccess(products.data));
        } catch (err) {
            console.log(err);
        }
    };
}