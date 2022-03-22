import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as userActionCreators from "../../redux/actions/userActions"
import { bindActionCreators } from 'redux'
import axios from "axios"
import { getAuth, signOut } from "firebase/auth"
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';

const Navi = ({ ...props }) => {
    useEffect(() => {

        firebase.auth().onAuthStateChanged((userCred) => {
            if (userCred) {
                console.log(userCred)
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
            console.log("bura", props.userCred)
            props.auth ? window.history.pushState("", "", "/") : window.history.pushState("", "", "/login")

        })
    }, [props.auth])
    const logout = async (token) => {
        let auth = await getAuth()
        await signOut(auth)
        props.actions.changeToken("")
        window.localStorage.setItem("auth", false)
        props.actions.changeUserCred("")

    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light rounded-5 px-3 mt-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">XO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page" href="#">Anasayfa</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/categories" class="nav-link" >Kategoriler</Link>
                            </li>


                        </ul>
                        <div class="d-flex">
                            {props.auth ? (
                                <>                  <Link to="/profile" class="navbar-brand" style={{ color: "#2c3e50", cursor: "pointer", textDecoration: "underline" }}>{props.userCred ? props.userCred.email : ""}</Link>
                                    <button onClick={logout} className='btn btn-danger ms-5'>Çıkış Yap</button></>
                            ) : (
                                <div><Link to="/login"><button className='btn btn-primary ms-5'>Giriş Yap</button></Link><Link to="/register"><button className='btn btn-primary ms-2'>Kayıt Ol</button></Link></div>
                            )}
                        </div>

                    </div>
                </div>
            </nav >
        </div >
    )
}

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
export default connect(mapStateToProps, mapDispatchToProps)(Navi)