import React from "react";
import HeaderStyle from "./header.module.scss";
import {NavLink} from "react-router-dom";
import {Loader} from "../loader/Loader";

export const Header = props => {
    const {profile} = props;
    const getProfile = () => {
        if (profile.isFetching) {
            return <Loader/>;
        } else {
            return (
                <NavLink to={"/"}>
                    <div className={HeaderStyle.profile}>
                        <p className={HeaderStyle.login}>
                            {profile.isAuth ? profile.login : "Login"}
                        </p>
                    </div>
                </NavLink>
            );
        };
    };

    return (
        <div className={HeaderStyle.header}>
            <div className="wrapper">
                <div className={HeaderStyle.overlay}>
                    <NavLink to="/" className={HeaderStyle.logo}></NavLink>
                    {getProfile()}
                </div>
            </div>
        </div>
    );
};