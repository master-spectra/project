import React from "react";
import {Field} from "redux-form";
import style from "../login.module.scss";

export const LoginForm = props => {
    return (
        <form action="#" onSubmit={props.handleSubmit} className={style.form}>
            <Field component={"input"} name={"email"} className={style.input}/>
            <Field component={"input"} name={"password"} type={"password"} className={style.input}/>
            <button>Send</button>
        </form>
    );
};