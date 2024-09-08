import React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase';
import styles from './login.module.css';
import google from '../assets/google.svg';
function Login() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Wellcome to Karggram</h2>
                <button className={styles.button} onClick={()=>auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
                    <img src={google} alt="google icon" />
                    Sign in with google
                </button>
            </div>
        </div>
    )
}

export default Login
