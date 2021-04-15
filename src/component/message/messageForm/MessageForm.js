import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {setMessageValidation} from "../../../utils/validate/validate";
import style from "./messageForm.module.scss";

export const MessageForm = ({onSubmit}) => {
    const submittingForm = (value, resetForm) => {
        onSubmit(value);
        resetForm();
    };

    return (
        <Formik initialValues={{messageText: ""}} onSubmit={(value, {resetForm}) => submittingForm(value, resetForm)} validationSchema={setMessageValidation}>
            <Form className={style.formSendPost}>
                <h3 className={style.formTitle}>My Post</h3>
                <ErrorMessage name={"messageText"}/>
                <Field name={"messageText"} type={"text"} component="input" className={style.formInput}/>
                <button type="submit" className={style.formBtn}>send</button>
            </Form>
        </Formik>
    );
};