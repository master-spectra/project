import React from "react";
import messageStyle from "./message.module.scss";
import {MessageFormConteiner} from "./messageForm/MessageFormConteiner";
import {MyMessage} from "./myMessage/MyMessage";

export const Message = (props) => {
    const {messageList, addYourmessage} = props;
    const addmessageCheckerFormessageChecker = "message/ADD MESSAGE";
    const messageLists = messageList.map((item, index) => <MyMessage key={index} text={item.text}/>);

    const callAddYourmessage = value => {
        addYourmessage(value, addmessageCheckerFormessageChecker);
    };

    return (
        <div className={messageStyle.message}>
            <div className={messageStyle.listmessage}>{messageLists}</div>
            <MessageFormConteiner onSubmit={value => callAddYourmessage(value)} />
        </div>
    );
};