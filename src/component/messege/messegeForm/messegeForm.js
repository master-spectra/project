import React from "react";
import messegeFormStyle from "./messegeForm.module.scss";
import { addPostActionCreator, changeInputActionCreator } from "../../../state/actionCreator/actionCreator";

export const MessegeForm = (props) => {
    const {messege, dispatch} = props;
    const input = React.createRef();
    const addMessegeCheckerForMessege = "ADD MESSEGE";
    const changeInputCheckerForMessege = "CHANGE INPUT MESSEGE";

    const callChangeInput = () => {
        dispatch(changeInputActionCreator(input, messege.inputValue, changeInputCheckerForMessege));
    };

    const callAddYourMessege = () => {
        dispatch(addPostActionCreator(input, messege.messegeList, addMessegeCheckerForMessege));
    };

    return (
        <form action="#" className={messegeFormStyle.formSendPost}>
            <h3 className={messegeFormStyle.formTitle}>
                Send messege
            </h3>
            <input
                type="text"
                value={messege.inputValue}
                ref={input}
                className={messegeFormStyle.formInput}
                onChange={callChangeInput}
            />
            <input
                type="button"
                className={messegeFormStyle.formBtn}
                value="Send"
                onClick={callAddYourMessege}
            />
        </form>
    )
};