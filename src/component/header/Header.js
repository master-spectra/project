import React from "react";
import HeaderStyle from "./header.module.scss";
import {NavLink} from "react-router-dom";

export const Header = ({logoutOnSite, isAuth}) => {
    return (
        <div className={HeaderStyle.header}>
            <div className="wrapper">
                <div className={HeaderStyle.overlay}>
                    <NavLink to="/" className={HeaderStyle.logo}></NavLink>
                    {isAuth ? <button onClick={logoutOnSite}>logout</button> : undefined}
                </div>
            </div>
        </div>
    );
};