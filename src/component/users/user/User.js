import React from "react";
import userStyle from "./user.module.scss"
import logo from "../../../media/logo.jpg";
import {NavLink} from "react-router-dom";
import {callFolowingOnUser, callUnFolowingOnUser} from "../../../api/api";

export const User = (props) => {
    const {profile, following, unFollowing, followInProgress, isFollow} = props;
    const btn = React.createRef();

    const callFollowing = () => {
        followInProgress(true);

        callFolowingOnUser(profile.id)
            .then(data => {
                if (!data.resultCode) {
                    following(btn.current, profile.id);
                    followInProgress(false);
                };
            });
    };

    const callUnFollowing = () => {
        followInProgress(true);

        callUnFolowingOnUser(profile.id)
            .then(data => {
                if (!data.resultCode) {
                    followInProgress(false);
                    unFollowing(btn.current, profile.id);
                };
            });
    };

    const getButton = () => {
        if (profile.followed) {
            if (isFollow) {
                return (
                    <button disabled className={userStyle.btnFollowing} ref={btn} onClick={callUnFollowing}>
                        UnFollow
                    </button>
                );
            } else {
                return (
                    <button className={userStyle.btnFollowing} ref={btn} onClick={callUnFollowing}>
                        UnFollow
                    </button>
                );
            };
        } else {
            if (!isFollow) {
                return (
                    <button className={userStyle.btnFollowing} ref={btn} onClick={callFollowing}>
                        Follow
                    </button>
                );
            } else {
                return (
                    <button disabled className={userStyle.btnFollowing} ref={btn} onClick={callFollowing}>
                        Follow
                    </button>
                );
            };
        };
    };

    const getImg = () => {
        if (profile.img) {
            return profile.img;
        } else {
            return logo;
        }
    };

    return (
        <div className={userStyle.user}>
            <div className={userStyle.otherItem}>
                <NavLink to={`/profile/${profile.id}`}>
                    <img className={userStyle.img} src={getImg()} alt={"#`"}/>
                </NavLink>
                {getButton()}
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