import React from "react";
import HeaderStyle from "./header.module.scss";
import {NavLink} from "react-router-dom";
import {Loader} from "../loader/Loader";

export const Header = props => {
    const {profile} = props;

    return (
        <div className={HeaderStyle.header}>
            <div className="wrapper">
                <div className={HeaderStyle.overlay}>
                    <NavLink to="/" className={HeaderStyle.logo}></NavLink>
                    {
                        profile.isFetching ? <Loader/> : <NavLink to={"/"}>
                            <div className={HeaderStyle.profile}>
                                <p className={HeaderStyle.login}>{profile.isAuth ? profile.login : "Login"}</p>
                            </div>
                        </NavLink>
                    }
                </div>
            </div>
        </div>
    );
};