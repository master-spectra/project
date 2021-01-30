import React from "react";
import UserStyle from "./user.module.scss";
import {Loader} from "../../loader/Loader";
import Logo from "../../../media/logo.jpg";

export const User = (props) => {
    const {currentProfile} = props;

    return (
        currentProfile
            ? <div className={UserStyle.profileWrap}>
                <div className={UserStyle.backgroundImage}></div>
                <div className={UserStyle.user}>
                    <img
                        className={UserStyle.imgUser}
                        src={currentProfile.photos.small ? currentProfile.photos.small : Logo}
                        alt={"#"}
                    />
                    <div className={UserStyle.userInfoWrap}>
                        <p className={UserStyle.userInfo}>
                            {
                                `Имя ${currentProfile.fullName}`
                            }
                        </p>
                        <p className={UserStyle.userInfo}>
                            {
                                currentProfile.aboutMe ? `Статус: ${currentProfile.aboutMe}` : "Статус: Неизвестно"
                            }
                        </p>
                        <p className={UserStyle.userInfo}>
                            {
                                currentProfile.lookingForAJob ? "Занятость: Ищу работу" : "Занятость: Не ищу работу"
                            }
                        </p>
                        <p className={UserStyle.userInfo}>
                            {
                                currentProfile.lookingForAJobDescription
                                    ? `О работе: ${currentProfile.lookingForAJobDescription}`
                                    : "О работе: Неизвестно"
                            }
                        </p>
                        <p className={UserStyle.userInfo}>
                            {
                                currentProfile.contacts.facebook
                                    ? `Соц-Сети: ${currentProfile.contacts.facebook}`
                                    : "Соц-Сети: Неизвестно"
                            }
                        </p>
                    </div>
                </div>
            </div>
            : <Loader/>
    );
};