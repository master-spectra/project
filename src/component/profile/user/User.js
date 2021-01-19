import React from "react";
import UserStyle from "./user.module.scss";

export const User = (props) => {
    const {userInfo} = props;

    const userInfoData = userInfo.map(item => {
        return <p className={UserStyle.userInfo}>{item}</p>
    });

    return (
        <div className={UserStyle.profileWrap}>
            <div className={UserStyle.backgroundImage}></div>
            <div className={UserStyle.user}>
                <div className={UserStyle.imgUser}></div>
                <div className={UserStyle.userInfoWrap}>
                    {userInfoData}
                </div>
            </div>
        </div>
    )
};