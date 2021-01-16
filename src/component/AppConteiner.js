import React from "react";
import {App} from "./App";

export const AppConteiner = (props) => {
    const {store} = props;

    const addYourMessege = ({}, ref, post, addPostCheckerForProfile) => {
        store.addPostActionCreator({}, ref, post, addPostCheckerForProfile)
    };

    const changeInput = ({}, ref, value, changeInputCheckerForProfile) => {
        store.changeInputActionCreator({}, ref, value, changeInputCheckerForProfile);
    };

    const likePost = ({}, likeBtn, likePostTextChacker, index) => {
        store.likePostActionCreator({}, likeBtn, likePostTextChacker, index);
    };

    return (
        <App
            state={store.getState()}
            addYourMessege={addYourMessege}
            changeInput={changeInput}
            likePost={likePost}
            className={store.getState().profile.userComment}
        />
    )
};