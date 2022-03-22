import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import Login from "../Login/Login"
import { connect } from 'react-redux';
import * as userActionCreators from "../../redux/actions/userActions"
import * as productActionCreators from "../../redux/actions/productActions"
import { bindActionCreators } from 'redux';
import Products from './includes/Products';
require("firebase/compat/auth")

const Main = ({ ...props }) => {

    useEffect(() => {
        console.log(props.token)
        props.actions.getProducts(props.token)

    }, [props.token])


    return (//
        <div>
            <div className='px-5 py-5'>
                {props.auth ? <Products products={props.products} /> : ""}
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    console.log(state)
    return {
        auth: state.authReducer,
        token: state.tokenReducer,
        userCred: state.usercredReducer,
        products: state.productsReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            changeAuth: bindActionCreators(userActionCreators.changeAuth, dispatch),
            changeToken: bindActionCreators(userActionCreators.changeToken, dispatch),
            changeUserCred: bindActionCreators(userActionCreators.changeUserCred, dispatch),
            getProducts: bindActionCreators(productActionCreators.getProducts, dispatch)
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)