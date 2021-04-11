import React from "react";
import style from "./formComponent.module.scss"

export const ErrorMessege = () => {
    return <label className={style.messege}>Uncorrected</label>;
};

export const Input = ({field, form, ...props}) => {
    return <input type={props.type} {...field} {...props}/>;
};