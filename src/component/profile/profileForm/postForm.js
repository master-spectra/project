import React from "react";
import style from "./postForm.module.scss";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {setPostValidation} from "../../../utils/validate/validate";

export const PostForm = ({onSubmit}) => {
    const submittingForm = (value, resetForm) => {
        onSubmit(value);
        resetForm();
    };

    return (
        <Formik initialValues={{postText: ""}} onSubmit={(value, {resetForm}) => submittingForm(value, resetForm)} validationSchema={setPostValidation}>
            <Form className={style.formSendPost}>
                <h3 className={style.formTitle}>My Post</h3>
                <ErrorMessage name={"postText"}/>
                <Field name={"postText"} type={"text"} component="input" className={style.formInput}/>
                <button type="submit" className={style.formBtn}>send</button>
            </Form>
        </Formik>
    )
};