// Imports
import React, { useEffect, useState } from 'react';
import styles from "./signup.module.css"
import { validate } from "./validate"
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Notification
import { notify } from './Notifications';
import { Link } from 'react-router-dom';


const Signup = () => {
    // Reset title
    document.title = "Sign Up";
    // Setting Data
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confrimPassword: "",
        checker: false,
    });
    // Error Managment
    const [errors, setErrors] = useState({});
    // Showing Data on Focus
    const [focus, setFocus] = useState({});

    // Updating Input Value on Change
    const updator = (event) => {
        if (event.target.name === "checker") {
            setData({ ...data, [event.target.name]: event.target.checked })
        }
        else {
            setData({ ...data, [event.target.name]: [event.target.value] })
        }
    }

    // Showing Errors on Focus
    const focusHandeler = (event) => {
        setFocus({ ...focus, [event.target.name]: true })
    }
    useEffect(() => {
        setErrors(validate(data));
    }, [data], [focus]); // ** On change data & focus




    // Sign Up Btn
    const signUpBtn = () => {
        // if all accepted **
        if (errors.name === true && errors.email === true && errors.finalPassword === true && errors.checker === true && errors.password === true && errors.confrimPassword === true) {
            // Sending Data to API
            const url = "https://jsonplaceholder.typicode.com/posts";
            const dataSned = {
                name: data.name[0],
                email: data.email[0],
                password: data.password[0],
            }
            axios.post(url, dataSned)
                .then(resp => {
                    // Cheking for Status
                    if (resp.status == 201) {
                        // nofification Succsess
                        setData({
                            name: "",
                            email: "",
                            password: "",
                            confrimPassword: "",
                            checker: false,
                        });
                        setFocus({
                            name: false,
                            email: false,
                            password: false,
                            confrimPassword: false,
                            checker: false
                        });
                        document.querySelector("input[type=checkbox]").checked = false
                        notify("You Signed Up Successfully !", "succsess")
                    }
                })


        } else {
            setFocus({
                name: true,
                email: true,
                password: true,
                confrimPassword: true,
                checker: true
            })
            notify("Invalid Item/Items !", "fail")

        }
    }

    // Buttons
    return (
        // form
        <form>
            {/* titile */}
            <h1 className="mainTitle">{document.title}</h1>
            {/* --------Inputs----- */}
            {/* Name */}
            <div className={styles.inputItem}>
                <label>Name</label>
                <input className={`${styles.gottaBlockSet} ${errors.name != true && focus.name == true ? styles.borderSetRed : styles.borderSetDefult}`} type="text" value={data.name} name="name" autoComplete="off" onChange={updator} onFocus={focusHandeler} />
                {focus.name && <span>{errors.name}</span>}
            </div>

            {/* Email */}
            <div className={styles.inputItem}>
                <label>Email</label>
                <input className={`${styles.gottaBlockSet} ${errors.email != true && focus.email == true ? styles.borderSetRed : styles.borderSetDefult}`} type="email" value={data.email} name="email" autoComplete="off" onChange={updator} onFocus={focusHandeler} />
                {focus.email && <span>{errors.email}</span>}

            </div>

            {/* Password  */}
            <div className={styles.inputItem}>
                <label>Password</label>
                <input className={`${styles.gottaBlockSet} ${errors.password != true && focus.password == true ? styles.borderSetRed : styles.borderSetDefult}`} type="Password" value={data.password} name="password" autoComplete="off" onChange={updator} onFocus={focusHandeler} />
                {focus.password && <span>{errors.password}</span>}

            </div>

            {/* Confrim  Password */}
            <div className={styles.inputItem}>
                <label>Confrim Password</label>
                <input className={`${styles.gottaBlockSet} ${errors.confrimPassword != true && focus.confrimPassword == true ? styles.borderSetRed : styles.borderSetDefult}`} type="Password" value={data.confrimPassword} name="confrimPassword" autoComplete="off" onChange={updator} onFocus={focusHandeler} />
                {focus.confrimPassword && <span>{errors.confrimPassword}</span>}

            </div>

            {/* Accepting Terms */}
            <div className={styles.inputItem}>
                <label htmlFor={styles.checker}>I accept terms of <a href="#" id={styles.privacy}>privacy policy</a></label>
                <input id={styles.checker} type="checkbox" value={data.checker} name="checker" autoComplete="off" onChange={updator} onFocus={focusHandeler} />
                {focus.checker && <span id={styles.termsError}>{errors.checker}</span>}

            </div>

            {/* Buttons */}
            <div id={styles.buttons}>
                <Link to="/Login" id={styles.login}>Login</Link>
                <a onClick={signUpBtn} id={styles.signup}>Sign Up</a>
            </div>
            <ToastContainer />
        </form>
    );
};

// Export
export default Signup;