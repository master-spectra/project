import React from "react";
import {Redirect} from "react-router-dom";
import {LoginConteiner} from "./form/LoginFormConteiner";

export const Login = props => {
    const {isAuth, loginOnSite} = props;

    const onSubmit = formData => {
        loginOnSite(formData);
    };

    if (isAuth) {
        return <Redirect to={"/profile"} />
    } else {
        return (
            <div className="login">
                <h1>Login</h1>
                <LoginConteiner onSubmit={formData => onSubmit(formData)}/>
            </div>
        );
    };
};