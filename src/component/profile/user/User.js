import React from "react";
import UserStyle from "./user.module.scss";
import {Loader} from "../../loader/Loader";

export const User = (props) => {
    const {currentProfile} = props;

    return (
        currentProfile ? <div className={UserStyle.profileWrap}>
                <div className={UserStyle.backgroundImage}></div>
                <div className={UserStyle.user}>
                    <img className={UserStyle.imgUser} src={currentProfile.photos.small} alt={""}/>
                    <div className={UserStyle.userInfoWrap}>
                        <p className={UserStyle.userInfo}>{currentProfile.fullName}</p>
                        <p className={UserStyle.userInfo}>{currentProfile.aboutMe}</p>
                        <p className={UserStyle.userInfo}>
                            {
                                currentProfile.lookingForAJob ? "Ищу работу" : "Не ищу работу"
                            }
                        </p>
                        <p className={UserStyle.userInfo}>
                            {
                                currentProfile.lookingForAJobDescription ? currentProfile.lookingForAJobDescription : null
                            }
                        </p>
                        <p className={UserStyle.userInfo}>
                            {
                                currentProfile.contacts.facebook ? currentProfile.contacts.facebook : null
                            }
                        </p>
                    </div>
                </div>
            </div>
            : <Loader/>
    );
};