import React, {ChangeEvent, useState} from "react";
import classes from './Login.module.css'
import {NavLink} from "react-router-dom";
import {pathEnum} from "../../routes/Main/Main";

export type FormErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const [isClass, isSetClass] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailInside, setEmailInside] = useState(false)
    const [passwordInside, setPasswordInside] = useState(false)
    const [emailError, setEmailError] = useState('Email cannot be empty')
    const [passwordError, setPasswordError] = useState('Password cannot be empty')



    const handlerLogin = () => {
        isSetClass(!isClass)
    }

    const blurHandlerEmail = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.name) {
            setEmailInside(true)
        }
    }

    const blurHandlerPassword = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.name) {
            setPasswordInside(true)
        }
    }

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(String(e.target.value).toLowerCase())) {
            setEmailError('Invalid email address')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 8) {
            setPasswordError('Password must be longer than 3 less 8')
            if(!e.target.value){
                setPasswordError('Password cannot be empty')
            }
        } else {
            setPasswordError('')
        }
    }



    return (
        <div className={classes.blockLogin}>
            <h1>Sign In</h1>
            <form className={classes.loginForm}>
                <div>
                    {(emailInside && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <input onChange={emailHandler} value={email} onBlur={blurHandlerEmail} type={"email"} name={'email'} placeholder={'Enter email...'}
                           className={classes.inputLogin}/>
                </div>
                <div>
                    {(passwordInside && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <input onChange={passwordHandler} value={password} onBlur={blurHandlerPassword} type={"password"} name={'password'} placeholder={'Enter password...'}
                           className={classes.inputLogin}/>
                </div>
                <div>
                    <label>
                        <input type={"checkbox"} className={classes.checkboxLogin}/>
                        Remember me
                    </label>
                </div>
                <NavLink to={pathEnum.forgotPassword} className={classes.forgot}>Forgot Password</NavLink>
                <button className={isClass ? classes.buttonLogin : classes.active} onClick={handlerLogin}>Login</button>
                <NavLink to={pathEnum.registration} className={classes.signUp}>Sign Up</NavLink>
            </form>
        </div>
    )
}