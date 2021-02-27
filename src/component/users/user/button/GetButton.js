import React from "react";
import userStyle from "../user.module.scss";
import {callFolowingOnUser, callUnFolowingOnUser} from "../../../../api/api";

export const GetButton = props => {
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