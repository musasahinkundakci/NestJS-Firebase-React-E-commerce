import React from 'react'
import { connect } from 'react-redux';
import * as userActionCreators from "../../redux/actions/userActions"
import firebase from 'firebase/compat/app';
import { bindActionCreators } from 'redux';
import * as productActionCreators from "../../redux/actions/productActions"
const Profile = ({ ...props }) => {
    return (
        <div className='px-5 py-5'>{
            props.userCred ? console.log(props.userCred) : ""}
            <h1>User Information</h1>
            <img src={props.userCred.photoURL} className="rounded my-4" />
            <p>Name : {props.userCred.displayName}</p>
            <p>Email : {props.userCred.email}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)