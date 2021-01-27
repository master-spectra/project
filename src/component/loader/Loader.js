import React from 'react';
import loaderLogo from "../../media/spinner.svg";
import loaderStyle from "./loader.module.scss";

export const Loader = () => {
    return (
        <div className={loaderStyle.loaderImageWrap}>
            <img src={loaderLogo} className={loaderStyle.loaderImage} alt={"#"}/>
        </div>
    );
};