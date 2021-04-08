import React from "react";
import userStyle from "../user.module.scss";
import {Loader} from "../../../loader/Loader";

export const GetButton = props => {
    const {profile, following, unFollowing, isFollow} = props;
    const btn = React.createRef();

    if (profile.followed) {
        if (isFollow) {
            return <Loader/>;
        } else {
            return <button className={userStyle.btnFollowing} ref={btn} onClick={() => unFollowing(btn.current, profile.id)}>UnFollow</button>;
        };
    } else {
        if (!isFollow) {
            return <button className={userStyle.btnFollowing} ref={btn} onClick={() => following(btn.current, profile.id)}>Follow</button>;
        } else {
            return <Loader/>;
        };
    };
};