import React, { useState, useEffect } from 'react'
import styles from './SignUp.module.css'
import { Link } from "react-router-dom";
import { validate } from "./validate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitle } from '../hooks/useTitle';

function SignUp() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        is_checked: false,
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    const changeHandler = (event) => {
        const { name, value, type, checked } = event.target;
   
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value,
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
                name: true,
                email: true,
                password: true,
                confirm: true,
                is_checked: true,
            })
        }
    }
    useTitle('Sign Up')
    useEffect(() => {
        setErrors(validate(data,'signup'))
    }, [data])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Sign Up
            </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler} className={touched.name && errors.name &&styles.selected} />
                    <div className={styles.error}>
                        {touched.name && errors.name && errors.name}
                    </div>
                </div>
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
                <div>
                    <label>Confirm Password</label>
                    <input type="password" value={data.confirm} name="confirm" onChange={changeHandler}
                        onFocus={focusHandler} className={touched.confirm && errors.confirm &&styles.selected}/>
                    <div className={styles.error}>
                        {touched.confirm && errors.confirm && errors.confirm}
                    </div>
                </div>
                <div>
                    <div className={styles.check}>
                        <label>I accept terms of privacy policy </label>
                        <input type="checkbox" name="is_checked" checked={data.is_checked} onChange={changeHandler}
                            onFocus={focusHandler} className={touched.is_checked && errors.is_checked &&styles.selected}/>
                    </div>
                    <div className={styles.error}>
                        {touched.is_checked && errors.is_checked && errors.is_checked}
                    </div>
                </div>
                <div className={styles.btns}>
                    <Link to="/login/">Login</Link>
                    <button className={styles.btn}>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default SignUp
