import React from "react";
import {App} from "./App";

export const AppConteiner = (props) => {
    const {store} = props;

    return (
        <App
            state={store.getState()}
            dispatch={(action) => store.dispatch(action)}
            className={store.getState().profile.userComment}
        />
    )
};