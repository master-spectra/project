import React from "react";
import MyMessageStyle from "./myMessege.module.scss";

export const MyMessage = ({text}) => {
    return (
        <div className={MyMessageStyle.myMessage}>
            <div className={MyMessageStyle.img}></div>
            <div className={MyMessageStyle.textWrap}>
                <p className={MyMessageStyle.text}>{text}</p>
                <button className={MyMessageStyle.answer}>Ответить</button>
            </div>
        </div>
    );
};