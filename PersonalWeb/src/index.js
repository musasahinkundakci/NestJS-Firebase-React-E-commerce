import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import firebase from 'firebase/compat/app';
import { configureStore } from "./redux/reducers/configureStore"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
const firebaseConfig = {
    apiKey: "AIzaSyBYffiRjYNrCSSivEKKMNmW0r7NgIGf_4k",
    authDomain: "firestore-84b9d.firebaseapp.com",
    projectId: "firestore-84b9d",
    storageBucket: "firestore-84b9d.appspot.com",
    messagingSenderId: "656971221286",
    appId: "1:656971221286:web:97d6dc31da6fa5dcfdd9e7",
    measurementId: "G-2BDFJ4FB0Q"
};
const store = configureStore()

firebase.initializeApp(firebaseConfig);
ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider></BrowserRouter>, document.getElementById('root'));
