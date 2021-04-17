import React from "react";
import {PostFormConteiner} from "./profileForm/postFormConteiner";
import {UserConteiner} from "./user/UserConteiner";
import {MyPostArrays} from "./myPost/MyPostArrays";

export const Profile = ({userComment, addYourMessage, userId}) => {
    const addPost = "profile/ADD POST";
    const callAddYourMessage = value => addYourMessage(value, addPost);

    return (
        <div>
            <UserConteiner userId={userId}/>
            <PostFormConteiner onSubmit={callAddYourMessage}/>
            <div><MyPostArrays userComment={userComment}/></div>
        </div>
    );
};