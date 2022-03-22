import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import * as userActionCreators from "../../redux/actions/userActions"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const Register = ({ ...props }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [progress, setProgress] = useState(false)
    const [error, setError] = useState(false)
    const emailChangeHandler = (e) => {

        setEmail(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }
    const registerWithEmail = async (e) => {
        setProgress(true)
        e.preventDefault()
        const auth = await getAuth();
        createUserWithEmailAndPassword(auth, email.toString().trim(), password.toString().trim())
            .then((userCredential) => {
                // Signed in 
                if (userCredential) {
                    console.log(email)
                    props.actions.changeAuth(true)
                    props.actions.changeUserCred(userCredential)
                    window.localStorage.setItem("auth", true)
                    setTimeout(() => {
                        setProgress(false)
                        props.auth ? console.log("login") : window.history.pushState("", "", "/")

                    }, 3000)

                }
                else {
                    setProgress(false)
                    setError(true)
                    setTimeout(() => {
                        setError(false)
                    }, 3000)
                    console.log("Kayıt yapılmadı!")
                }
                // ...
            })
            .catch((error) => {
                setProgress(false)
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div className='px-5 py-5'>    <>
            <h1>Register Page</h1>
            {error ? (
                <button class="btn btn-danger my-3" type="button" disabled>

                    Kayıt Yapılamadı...
                </button>
            ) : ""}
            {progress ? (
                <button class="btn btn-primary my-3" type="button" disabled>
                    <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Kayıt Yapılıyor...
                </button>
            ) : ""}
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input onChange={emailChangeHandler} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input onChange={passwordChangeHandler} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <button onClick={registerWithEmail} className='btn btn-primary'>Submit</button><br />
        </></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Register)