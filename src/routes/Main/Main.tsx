import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {Login} from "../../common/Login/Login";
import {Registration} from "../../common/Registration/Registration";
import {ForgotPassword} from "../../common/ForgotPassword/ForgotPassword";
import {NewPassword} from "../../common/NewPassword/NewPassword";
import {Profile} from "../../common/Profile/Profile";
import {Error404} from "../../common/Error404/Error404";
import {Nav} from "../NavLink/NavLink";
import classes from "./Main.module.css"

export enum pathEnum {
    login = '/login',
    registration = '/registration',
    forgotPassword = '/forgotPassword',
    newPassword = '/newPassword ',
    profile = '/profile',
    error404 = '/error404',
    empty = '/*'
}

export const Main = () => {
    return (
        <div className={classes.blockMain}>
            <Nav/>
            <div className={classes.blockComponents}>
                <Routes>
                    <Route path={pathEnum.login} element={<Login/>}/>
                    <Route path={pathEnum.registration} element={<Registration/>}/>
                    <Route path={pathEnum.forgotPassword} element={<ForgotPassword/>}/>
                    <Route path={pathEnum.newPassword} element={<NewPassword/>}/>
                    <Route path={pathEnum.profile} element={<Profile/>}/>
                    <Route path={pathEnum.error404} element={<Error404/>}/>
                    {/*<Route path={pathEnum.empty} element={<Navigate to={pathEnum.login}/>}/>*/}
                </Routes>
            </div>
        </div>
    )
}