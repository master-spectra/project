import React from "react";
import style from "./login.module.scss";
import {Field} from "redux-form";
import {Redirect} from "react-router-dom";

export const Login = props => {
    const {isAuth} = props;
    if (isAuth) {
        return <Redirect to={"/profile"} />
    } else {
        return (
            <form action="#" onSubmit={props.handleSubmit} className={style.form}>
                <h1 className={style.title}>Login</h1>
                <Field component={"input"} name={"email"} className={style.input}/>
                <Field component={"input"} name={"password"} type={"password"} className={style.input}/>
                <button>Send</button>
            </form>
        );
    };
};