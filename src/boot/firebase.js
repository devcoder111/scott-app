import * as firebase from "firebase/app"
import firestore from 'firebase/firestore'

import "firebase/auth"
import "firebase/database"

const settings = { timestampsInSnapshots: true }
    // ADD YOUR FIREBASE CONFIG OBJECT HERE:

var firebaseConfig = {
    apiKey: "AIzaSyBg0lQg4U-Fh0nNIsFZYvLt3slMqu1NFEo",
    authDomain: "fb101-286a0.firebaseapp.com",
    databaseURL: "https://fb101-286a0.firebaseio.com",
    projectId: "fb101-286a0",
    storageBucket: "fb101-286a0.appspot.com",
    messagingSenderId: "617138214589",
    appId: "1:617138214589:web:58864af1dae94908da49d4"
};


let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()
    // let storage = firebaseApp.storage("gs://fb101-286a0.appspot.com");

let firebaseStore = firebase.firestore();

export { firebaseAuth, firebaseDb, firebaseStore }