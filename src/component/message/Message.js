import React from "react";
import messageStyle from "./message.module.scss";
import {MessageFormConteiner} from "./messageForm/MessageFormConteiner";
import {MyMessageArrays} from "./myMessage/MyMessageArrays";

export const Message = ({messageList, addYourMessage}) => {
    const addMessageCheckerForMessageChecker = "message/ADD MESSAGE";

    const callAddYourMessage = value => {
        addYourMessage(value, addMessageCheckerForMessageChecker);
    };

    return (
        <div className={messageStyle.message}>
            <div className={messageStyle.listMessage}><MyMessageArrays messageList={messageList}/></div>
            <MessageFormConteiner onSubmit={value => callAddYourMessage(value)} />
        </div>
    );
};