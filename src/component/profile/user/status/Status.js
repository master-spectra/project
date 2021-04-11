import React, {Component} from "react";
import style from "./status.module.scss";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {setStatusValidation} from "../../../../utils/validate/validate";
import {Input} from "../../../common/FormComponent/FormComponent";

export class Status extends Component {
    state = {editStatusMode: false}

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({localStatus: this.props.status});
        };
    }

    changeEditStatusMode = () => {
        this.setState({editStatusMode: !this.state.editStatusMode});
    }

    submittingForm = (value) => {
        const {onSubmit} = this.props;

        onSubmit(value);
        this.changeEditStatusMode();
    }

    render = () => {
        const {status} = this.props;

        if (!this.state.editStatusMode) {
            return (
                <div className={style.status} onDoubleClick={this.changeEditStatusMode}>
                    <p className={style.info}>О мне: {status || "----------------------"}</p>
                </div>
            );
        } else {
            return (
                <Formik initialValues={{status: ""}} onSubmit={value => this.submittingForm(value)} validationSchema={setStatusValidation}>
                    <Form>
                        <ErrorMessage name={"status"}/>
                        <Field type={"text"} name={"status"} component={Input}/>
                        <button type={"submit"} className={style.btn}>Save</button>
                    </Form>
                </Formik>
            );
        };
    }
};