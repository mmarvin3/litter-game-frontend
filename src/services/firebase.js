// Imports

import firebase from "firebase/app";
import "firebase/auth";

// Our web app's Firebase Configuration

const config = {
    apiKey: "AIzaSyCisdT-M0rR8rSiYMpnSWfbxPgXOhViIdw",
    authDomain: "cleanup-crew-2139a.firebaseapp.com",
    projectId: "cleanup-crew-2139a",
    storageBucket: "cleanup-crew-2139a.appspot.com",
    messagingSenderId: "379231552001",
    appId: "1:379231552001:web:5dcb55c40b76d2ac86f600"
};

// Initialize Firebase

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

export { auth, login, logout };