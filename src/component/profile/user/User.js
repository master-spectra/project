import React from "react";
import UserStyle from "./user.module.scss";

export const User = (props) => {
    const {userInfo} = props;

    return (
        <div className={UserStyle.profileWrap}>
            <div className={UserStyle.backgroundImage}></div>
            <div className={UserStyle.user}>
                <div className={UserStyle.imgUser}></div>
                <div className={UserStyle.userInfoWrap}>
                    {userInfo}
                </div>
            </div>
        </div>
    )
};