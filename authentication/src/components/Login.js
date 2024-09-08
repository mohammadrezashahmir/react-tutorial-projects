import React, { useState, useEffect } from 'react'
import styles from './SignUp.module.css'
import { Link } from "react-router-dom";
import { validate } from "./validate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitle } from '../hooks/useTitle';

function Login() {
    const [data, setData] = useState({
        email: '',
        password: '', 
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    const changeHandler = (event) => {
        const { name, value, } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    }
    const focusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (Object.keys(errors).length === 0) {
            toast.success("Data sent successfully !");
        } else {
            toast.error("Data is invalid");
            setTouched({
                email: true,
                password: true,     
            })
        }
    }
    useTitle('Login')
    useEffect(() => {
        setErrors(validate(data,'login'))
    }, [data])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Login
            </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email</label>
                    <input type="email" value={data.email} name="email" onChange={changeHandler}
                        onFocus={focusHandler} className={touched.email && errors.email &&styles.selected}/>
                    <div className={styles.error}>
                        {touched.email && errors.email && errors.email}
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={data.password} name="password" onChange={changeHandler}
                        onFocus={focusHandler} className={touched.password && errors.password &&styles.selected}/>
                    <div className={styles.error}>
                        {touched.password && errors.password && errors.password}
                    </div>
                </div>
                <div className={styles.btns}>
                    <Link to="/sign-up/">Sign Up</Link>
                    <button className={styles.btn}>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login
