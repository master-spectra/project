import React from "react";
import userStyle from "./user.module.scss"
import { followingUserActionCreator } from "../../../state/actionCreator/actionCreator";
import logo from "../../../media/logo.jpg";

export const User = (props) => {
    const {name, status, index, img, following} = props;
    const btn = React.createRef();
    const followCheckerForUser = "FOLLOW ON USER";

    const callFolowingOnUser = () => {
        following(btn, followCheckerForUser, index);
    };

    return (
        <div className={userStyle.user}>
            <div className={userStyle.otherItem}>
                <img className={userStyle.img} src={ img !== null ? img : logo}/>
                <button className={userStyle.btnFollowing} ref={btn} onClick={callFolowingOnUser}>Follow</button>
            </div>
            <div className={userStyle.information}>
                <div className={userStyle.aboutUser}>
                    <p className={userStyle.name}>{name}</p>
                    <p className={userStyle.about}>О пользователе: {status}</p>
                </div>
                <div>
                    <p className={userStyle.country}>Страна: неизвестно</p>
                    <p className={userStyle.city}>Город: неизвестно</p>
                </div>
            </div>
        </div>
    )
};