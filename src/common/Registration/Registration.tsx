import React, {ChangeEvent, useState} from "react";
import classes from "./Registration.module.css";
import {useNavigate} from "react-router-dom";

export const Registration = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emailInside, setEmailInside] = useState(false)
    const [confirmPasswordInside, setConfirmPasswordInside] = useState(false)
    const [passwordInside, setPasswordInside] = useState(false)
    const [emailError, setEmailError] = useState('Email cannot be empty')
    const [passwordError, setPasswordError] = useState('Password cannot be empty')
    const [confirmPasswordError, setConfirmPasswordError] = useState('Confirm password cannot be empty')

    const navigate = useNavigate()


    const onBlurHandlerEmail = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.name) {
            setEmailInside(true)
        }
    }

    const blurHandlerPassword = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.name) {
            setPasswordInside(true)
        }
    }

    const blurHandlerConfirmPassword = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.name) {
            setConfirmPasswordInside(true)
            if(password !== confirmPassword) {
                setConfirmPasswordError('Passwords must match')
            }
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

    const confirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords must match')
            if(!e.target.value){
                setConfirmPasswordError('Confirm password is required')
            }
        } else {
            setConfirmPasswordError('')
        }
    }


    return (
        <div className={classes.blockRegistration}>
            <h1>Sign Up</h1>
            <form className={classes.registrationForm}>
                <div>
                    {(emailInside && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <input onChange={emailHandler} value={email} onBlur={onBlurHandlerEmail} type={"email"}
                           name={'email'} placeholder={'Enter email...'}
                           className={classes.inputRegistration}/>
                </div>
                <div>
                    {(passwordInside && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <input onChange={passwordHandler} value={password} onBlur={blurHandlerPassword} type={"password"}
                           name={'password'} placeholder={'Enter password...'}
                           className={classes.inputRegistration}/>
                </div>
                <div>
                    {(confirmPasswordInside && passwordError) && <div style={{color:'red'}}>{confirmPasswordError}</div>}
                    <input onChange={confirmPasswordHandler} value={confirmPassword} onBlur={blurHandlerConfirmPassword}
                           type={"password"} name={'password'} placeholder={'Confirm password...'}
                           className={classes.inputRegistration}/>
                </div>
                <div className={classes.boxButton}>
                    <button className={classes.buttonCancel} onClick={() => navigate('/login')}>Cancel</button>
                    <button type="submit" className={classes.buttonRegistration}>Register</button>
                </div>
            </form>
        </div>
    )
}