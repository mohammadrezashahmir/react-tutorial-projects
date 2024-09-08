import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBtRnlHIHA747aqAbM3KUUGEVcal1NT-RQ",
    authDomain: "karggram.firebaseapp.com",
    projectId: "karggram",
    storageBucket: "karggram.appspot.com",
    messagingSenderId: "1053570341428",
    appId: "1:1053570341428:web:58e903737936515ef08861"
  }).auth();