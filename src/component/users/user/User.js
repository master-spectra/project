import React from "react";
import userStyle from "./user.module.scss"
import logo from "../../../media/logo.jpg";
import {NavLink} from "react-router-dom";
import {callFolowingOnUser, callUnFolowingOnUser} from "../../../api/api";

export const User = (props) => {
    const {name, status, img, following, id, unFollowing, followed} = props;
    const btn = React.createRef();

    const callFollowing = () => {
        callFolowingOnUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    following(btn, id);
                };
            });
    };

    const callUnFollowing = () => {
        callUnFolowingOnUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    unFollowing(id);
                };
            });
    };

    const getButton = () => {
        if (followed) {
            return (
                <button className={userStyle.btnFollowing} ref={btn} onClick={callUnFollowing}>
                    UnFollow
                </button>
            );
        } else {
            return (
                <button className={userStyle.btnFollowing} ref={btn} onClick={callFollowing}>
                    Follow
                </button>
            );
        };
    };

    return (
        <div className={userStyle.user}>
            <div className={userStyle.otherItem}>
                <NavLink to={`/profile/${id}`}>
                    <img className={userStyle.img} src={img !== null ? img : logo} alt={"#`"}/>
                </NavLink>
                {getButton()}
            </div>
            <div className={userStyle.information}>
                <div className={userStyle.aboutUser}>
                    <p className={userStyle.name}>{name}</p>
                    <p className={userStyle.about}>О пользователе: {status}</p>
                </div>
                <div className={userStyle.location}>
                    <p className={userStyle.country}>Страна: неизвестно</p>
                    <p className={userStyle.city}>Город: неизвестно</p>
                </div>
            </div>
        </div>
    );
};