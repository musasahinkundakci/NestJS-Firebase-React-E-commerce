import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import Navi from '../Navi/Navi';
import { Route, Routes } from "react-router-dom"
import Main from "../Main/Main"
import { connect } from 'react-redux';
import * as userActionCreators from "../../redux/actions/userActions"
import { bindActionCreators } from 'redux'
import axios from "axios"
import firebase from 'firebase/compat/app';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Category from '../Category/Category';
import ProductDetail from "../Main/includes/ProductDetail"
const App = ({ ...props }) => {

  useEffect(() => {

    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {

        props.actions.changeAuth(true)
        props.actions.changeUserCred(userCred)
        window.localStorage.setItem("auth", true)
        userCred.getIdToken().then(token => {

          props.actions.changeToken(token)

        })
      }
      else {
        props.actions.changeAuth(false)
        window.localStorage.setItem("auth", false)
      }
      console.log(props.auth)
      props.auth ? console.log("main") : window.history.pushState("", "", "/login")

    })
  }, [props.auth])
  return (
    <>
      <div className="container">
        <Navi />

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/register' element={<Register />}> </Route>
          <Route path='/categories' element={<Category />}> </Route>
          <Route path='/product-detail' element={<ProductDetail />}> </Route>
        </Routes>

        <footer class="footer mt-auto py-3 bg-light" style={{}}>
          <div class="container">
            <span class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, autem!</span>
          </div>
        </footer>


      </div>
    </>
  );
};
function mapStateToProps(state) {
  console.log(state)
  return {
    auth: state.authReducer,
    token: state.tokenReducer,
    userCred: state.usercredReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeAuth: bindActionCreators(userActionCreators.changeAuth, dispatch),
      changeToken: bindActionCreators(userActionCreators.changeToken, dispatch),
      changeUserCred: bindActionCreators(userActionCreators.changeUserCred, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App)