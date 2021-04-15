import React from "react";
import userStyle from "./user.module.scss"
import Logo from "../../../media/logo.jpg";
import {NavLink} from "react-router-dom";
import {GetButtonConteiner} from "./button/GetButtonConteiner";

export const User = ({profile}) => {
    return (
        <div className={userStyle.user}>
            <div className={userStyle.otherItem}>
                <NavLink to={`/profile/${profile.id}`}>
                    <img className={userStyle.img} src={profile.img ? profile.img : Logo} alt={"#"}/>
                </NavLink>
                <GetButtonConteiner profile={profile}/>
            </div>
            <div className={userStyle.information}>
                <div className={userStyle.aboutUser}>
                    <p className={userStyle.name}>{profile.name}</p>
                    <p className={userStyle.about}>О пользователе: {profile.status}</p>
                </div>
                <div className={userStyle.location}>
                    <p className={userStyle.country}>Страна: неизвестно</p>
                    <p className={userStyle.city}>Город: неизвестно</p>
                </div>
            </div>
        </div>
    );
};