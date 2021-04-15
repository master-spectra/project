import React from "react";
import MyMessageStyle from "./myMessege.module.scss";

export const MyMessage = (props) => {
    const {text} = props;

    return (
        <div className={MyMessageStyle.mymessage}>
            <div className={MyMessageStyle.img}></div>
            <div className={MyMessageStyle.textWrap}>
                <p className={MyMessageStyle.text}>{text}</p>
                <button className={MyMessageStyle.answer}>Ответить</button>
            </div>
        </div>
    );
};