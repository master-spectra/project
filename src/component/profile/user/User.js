import React from "react";
import UserStyle from "./user.module.scss";
import {Loader} from "../../loader/Loader";
import Logo from "../../../media/logo.jpg";
import {StatusConteiner} from "./status/StatusConteiner";

const getInfo = item => {
    if (item) {
        return item;
    };

    return "Неизвестно";
};

export const User = ({currentProfile, updateStatus, userId, updatePhotos}) => {
    const onSubmit = formData => {
        updateStatus(formData.status);
    };

    return currentProfile ? <div className={UserStyle.profileWrap}>
        <div className={UserStyle.backgroundImage}></div>
        <div className={UserStyle.user}>
            <div>
                <img className={UserStyle.imgUser} src={currentProfile.photos && currentProfile.photos.small ? currentProfile.photos.small : Logo} alt={"#"}/>
            </div>
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
                <StatusConteiner userId={userId} onSubmit={onSubmit}/>
                {
                    !userId ? <form action="#"><input type="file" onChange={e => updatePhotos(e.target.files[0])}/></form> : null
                }
            </div>
        </div>
    </div> : <Loader/>;
};