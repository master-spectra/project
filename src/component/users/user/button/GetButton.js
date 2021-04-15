import React from "react";
import userStyle from "../user.module.scss";
import {Loader} from "../../../loader/Loader";

export const GetButton = props => {
    const {profile, following, unFollowing, isFollow} = props;

    if (profile.followed) {
        if (isFollow) {
            return <Loader/>;
        };

        return <button className={userStyle.btnFollowing} onClick={() => unFollowing(profile.id)}>UnFollow</button>;
    };

    if (!isFollow) {
        return <button className={userStyle.btnFollowing} onClick={() => following(profile.id)}>Follow</button>;
    };

    return <Loader/>;
};