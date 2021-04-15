import React from "react";
import style from "./formComponent.module.scss"

export const ErrorMessage = () => {
    return <label className={style.message}>Uncorrected</label>;
};

export const Input = ({field, form, ...props}) => {
    return <input type={props.type} {...field} {...props}/>;
};