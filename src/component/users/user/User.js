import React from "react";
import userStyle from "./user.module.scss"
import logo from "../../../media/logo.jpg";
import {NavLink} from "react-router-dom";
import {callFolowingOnUser} from "../../../api/api";

export const User = (props) => {
    const {name, status, img, following, id} = props;
    const btn = React.createRef();

    const callFollowing = () => {
        callFolowingOnUser(id)
            .then(data => {
                if (data.resultCode === 1) {
                    following(btn, id);
                }
            });
    };

    return (
        <div className={userStyle.user}>
            <div className={userStyle.otherItem}>
                <NavLink to={`/profile/${id}`}>
                    <img className={userStyle.img} src={img !== null ? img : logo} alt={"#`"}/>
                </NavLink>
                <button className={userStyle.btnFollowing} ref={btn} onClick={callFollowing}>
                    Follow
                </button>
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