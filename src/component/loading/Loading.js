import React from "react";
import style from "./loading.module.scss";
import {Loader} from "../loader/Loader";

export const Loading = props => {
    const {loading, loadingInProgress} = props;

    setTimeout(() => {
        loadingInProgress(false);
    }, 3000);

    if (loading) {
        return <div className={`${style.loading}`}><Loader/></div>;
    } else {
        return <div className={`${style.loading} hide`}></div>;
    };
};