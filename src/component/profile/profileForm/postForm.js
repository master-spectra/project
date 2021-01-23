import React from "react";
import style from "./postForm.module.scss";

export const PostForm = (props) => {
    const {inputValue, changeInput, addYourMessege} = props;
    const input = React.createRef();
    const addPostCheckerForProfile = "ADD POST";
    const changeInputCheckerForProfile = "CHANGE INPUT PROFILE";

    const callChangeInput = () => {
        changeInput(input, changeInputCheckerForProfile);
    };

    const callAddYourMessege = () => {
        addYourMessege(input, addPostCheckerForProfile);
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