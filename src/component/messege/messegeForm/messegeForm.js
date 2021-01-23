import React from "react";
import messegeFormStyle from "./messegeForm.module.scss";

export const MessegeForm = (props) => {
    const {inputValue, changeInput, addYourMessege} = props;
    const input = React.createRef();
    const addMessegeCheckerForMessege 	= "ADD MESSEGE";
    const changeInputCheckerForMessege 	= "CHANGE INPUT MESSEGE";


    const callChangeInput = () => {
        changeInput(input, changeInputCheckerForMessege);
    };

    const callAddYourMessege = () => {
        addYourMessege(input, addMessegeCheckerForMessege);
    };

    return (
        <form action="#" className={messegeFormStyle.formSendPost}>
            <h3 className={messegeFormStyle.formTitle}>
                Send messege
            </h3>
            <input
                type="text"
                value={inputValue}
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