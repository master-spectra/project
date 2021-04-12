import React from "react";
import style from "../login.module.scss";
import {ErrorMessage, Field, Form, Formik} from "formik";

export const LoginForm = props => {
    const {onSubmit} = props;

    return (
        <Formik initialValues={{email: "", password: ""}} onSubmit={onSubmit}>
            <Form className={style.form}>
                <div>
                    <Field component={"input"} name={"email"} className={style.input}/>
                    <ErrorMessage name={"email"}/>
                </div>
                <div>
                    <Field component={"input"} name={"password"} type={"password"} className={style.input}/>
                    <ErrorMessage name={"password"}/>
                </div>
                <button type={"submit"}>Send</button>
            </Form>
        </Formik>
    );
};