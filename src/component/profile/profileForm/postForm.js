import React from "react";
import style from "./postForm.module.scss";

export const PostForm = (props) => {
    const {inputValue, changeInput, addYourMessege} = props;
    const input = React.createRef();
    const addPostCheckerForProfileChecker = "ADD POST";
    const changeInputCheckerForProfileChecker = "CHANGE INPUT PROFILE";

    const callChangeInput = () => {
        changeInput(input, changeInputCheckerForProfileChecker);
    };

    const callAddYourMessege = () => {
        addYourMessege(input, addPostCheckerForProfileChecker);
    };

    return (
        <form action="#" className={style.formSendPost}>
            <h3 className={style.formTitle}>
                My Post
            </h3>
            <input
                type="text"
                value={inputValue}
                ref={input}
                className={style.formInput}
                onChange={callChangeInput}
            />
            <input
                type="button"
                className={style.formBtn}
                value="Send"
                onClick={callAddYourMessege}
            />
        </form>
    )
};