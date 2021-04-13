import React, {useState} from "react";
import style from "./status.module.scss";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {setStatusValidation} from "../../../../utils/validate/validate";
import {Input} from "../../../common/FormComponent/FormComponent";

export const StatusWithHooks = props => {
    const {status, onSubmit} = props;
    const [editMode, setEditMode] = useState(false);

    const changeEditMode = () => {
        setEditMode(!editMode);
    };

    const submitting = (value, {resetForm}) => {
        onSubmit(value);
        resetForm();
        setEditMode(!editMode);
    };

    if (!editMode) {
        return (
            <div className={style.status} onDoubleClick={changeEditMode}>
                <p className={style.info}>О мне: {status || "----------------------"}</p>
            </div>
        );
    } else {
        return (
            <Formik initialValues={{status: ""}} onSubmit={submitting} validationSchema={setStatusValidation}>
                <Form>
                    <ErrorMessage name={"status"}/>
                    <Field type={"text"} name={"status"} component={Input}/>
                    <button type={"submit"} className={style.btn}>Save</button>
                </Form>
            </Formik>
        );
    };
};