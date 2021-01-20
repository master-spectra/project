import React from "react";
import userStyle from "./user.module.scss"
import { followingUserActionCreator } from "../../../state/actionCreator/actionCreator";

export const User = (props) => {
    const {name, statusFollowing, about, location, dispatch, index} = props;
    const btn = React.createRef();
    const followCheckerForUser = "FOLLOW ON USER";

    const callFolowingOnUser = () => {
        dispatch(followingUserActionCreator(btn, followCheckerForUser, index));
    };

    return (
        <div className={userStyle.user}>
            <div className={userStyle.otherItem}>
                <div className={userStyle.img}></div>
                <button className={userStyle.btnFollowing} ref={btn} onClick={callFolowingOnUser}>{statusFollowing + ""}</button>
            </div>
            <div className={userStyle.information}>
                <div className={userStyle.aboutUser}>
                    <p className={userStyle.name}>{name}</p>
                    <p className={userStyle.about}>О пользователе: {about}</p>
                </div>
                <div>
                    <p className={userStyle.country}>Страна: {location.country}</p>
                    <p className={userStyle.city}>Город: {location.city}</p>
                </div>
            </div>
        </div>
    )
};