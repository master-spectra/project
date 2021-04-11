import React from "react";
import {Field, Form, Formik} from "formik";
import {setMessegeValidation} from "../../../utils/validate/validate";
import style from "./messegeForm.module.scss";

export const MessegeForm = (props) => {
    const {onSubmit} = props;

    const submittingForm = (value, resetForm) => {
        onSubmit(value);
        resetForm("");
    };

    return (
        <Formik initialValues={{messegeText: ""}} onSubmit={(value, {resetForm}) => submittingForm(value, resetForm)} validationSchema={setMessegeValidation}>
            <Form className={style.formSendPost}>
                <h3 className={style.formTitle}>My Post</h3>
                <Field name={"messegeText"} type={"text"} component="input" className={style.formInput}/>
                <button type="submit" className={style.formBtn}>send</button>
            </Form>
        </Formik>
    );
};