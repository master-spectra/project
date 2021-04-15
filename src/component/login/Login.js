import React from "react";
import {LoginConteiner} from "./form/LoginFormConteiner";
import {ErrorMessage} from "../common/FormComponent/FormComponent";

export const Login = ({isAuth, loginOnSite, statusCode}) => {
    const onSubmit = formData => {
        loginOnSite(formData);
    };

    if (!isAuth) {
        return (
            <div className="login">
                <h1>{statusCode === 1 ? <ErrorMessage /> : "Login"}</h1>
                <LoginConteiner onSubmit={formData => onSubmit(formData)}/>
            </div>
        );
    };
};