import React from "react";
import style from "./postForm.module.scss";
import { addPostActionCreator, changeInputActionCreator } from "../../../state/store";

export const PostForm = (props) => {
    const {profile, dispatch} = props;
    const input = React.createRef();
    const changeInputCheckerForProfile = "CHANGE INPUT PROFILE";
    const addPostCheckerForProfile = "ADD POST";

    const callChangeInput = () => {
        dispatch(changeInputActionCreator(input, profile.inputValue, changeInputCheckerForProfile));
    };

    const callAddYourMessege = () => {
        dispatch(addPostActionCreator(input, profile.userComment, addPostCheckerForProfile));
    };

    return (
        <form action="#" className={style.formSendPost}>
            <h3 className={style.formTitle}>
                My Post
            </h3>
            <input
                type="text"
                value={profile.inputValue}
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