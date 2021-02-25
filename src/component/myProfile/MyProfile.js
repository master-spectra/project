import React from "react";
import MyProfileStyle from "./myProfile.module.scss";
import Logo from "../../media/logo.jpg";

export const MyProfile = props => {
    const {myProfile} = props;

    const getImg = () => {
        if (myProfile.profile && myProfile.profile.img) {
            return myProfile.profile.img;
        } else {
            return Logo;
        };
    };

    return (
        <div className={MyProfileStyle.profile}>
            <div className={MyProfileStyle.profileImgWrap}>
                <img className={MyProfileStyle.profileImg} src={getImg()} alt="#"/>
            </div>
            <div className={MyProfileStyle.profileInfo}>
                <p>{`Имя: ${myProfile.profile ? myProfile.profile.login : ""}`}</p>
                <p>{`Почта: ${myProfile.profile ? myProfile.profile.email : ""}`}</p>
                <p>{`Индификатор: ${myProfile.profile ? myProfile.profile.id : ""}`}</p>
            </div>
        </div>
    );
};