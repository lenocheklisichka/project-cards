import React from "react";
import classes from './Error404.module.css'

export const Error404 = () => {
    return (
        <div>
            <h1 className={classes.error}>404</h1>
            <h1 className={classes.errorNotFound}>Oops... Page not found</h1>
        </div>
    )
}