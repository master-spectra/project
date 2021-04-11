import React from "react";
import UserStyle from "./user.module.scss";
import {Loader} from "../../loader/Loader";
import Logo from "../../../media/logo.jpg";
import {StatusConteiner} from "./status/StatusConteiner";

const getInfo = item => {
    if (item) {
        return item;
    } else {
        return "Неизвестно";
    };
};

export const User = (props) => {
    const {currentProfile, updateStatus} = props;

    const onSubmit = formData => {
        updateStatus(formData.status);
    };

    return currentProfile ? <div className={UserStyle.profileWrap}>
        <div className={UserStyle.backgroundImage}></div>
        <div className={UserStyle.user}>
            <img className={UserStyle.imgUser} src={currentProfile.photos && currentProfile.photos.small ? currentProfile.photos.small : Logo} alt={"#"}/>
            <div className={UserStyle.userInfoWrap}>
                <p className={UserStyle.userInfo}>
                    {`Имя: ${getInfo(currentProfile.fullName)}`}
                </p>
                <p className={UserStyle.userInfo}>
                    {`О мне: ${getInfo(currentProfile.aboutMe)}`}
                </p>
                <p className={UserStyle.userInfo}>
                    {`Работа: ${getInfo(currentProfile.lookingForAJob) + ""}`}
                </p>
                <p className={UserStyle.userInfo}>
                    {`О работе: ${getInfo(currentProfile.lookingForAJobDescription)}`}
                </p>
                <p className={UserStyle.userInfo}>
                    {`Контакты: ${getInfo(currentProfile.contacts && currentProfile.contacts.facebook ? currentProfile.contacts.facebook : null)}`}
                </p>
                <StatusConteiner onSubmit={onSubmit}/>
            </div>
        </div>
    </div> : <Loader/>;
};