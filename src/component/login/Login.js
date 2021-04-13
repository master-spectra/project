import React from "react";
import {LoginConteiner} from "./form/LoginFormConteiner";
import {ErrorMessege} from "../common/FormComponent/FormComponent";

export const Login = props => {
    const {isAuth, loginOnSite, statusCode} = props;

    const onSubmit = formData => {
        loginOnSite(formData);
    };

    if (!isAuth) {
        return (
            <div className="login">
                <h1>{statusCode === 1 ? <ErrorMessege /> : "Login"}</h1>
                <LoginConteiner onSubmit={formData => onSubmit(formData)}/>
            </div>
        );
    };
};