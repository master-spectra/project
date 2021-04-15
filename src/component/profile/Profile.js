import React from "react";
import {PostFormConteiner} from "./profileForm/postFormConteiner";
import {UserConteiner} from "./user/UserConteiner";
import {MyPost} from "./myPost/MyPost";

export const Profile = (props) => {
    const {userComment, addYourMessage}   = props;
    const addPostCheckerForProfile 		            = "profile/ADD POST";

    const userComments = userComment.map((item, index) => {
        const postData = {
            text: item.comment,
            status: userComment,
            index: index
        };

        return (
            <MyPost
                postData={postData}
                key={index}
            />
        );
    })
    const callAddYourmessage = value => {
        addYourMessage(value, addPostCheckerForProfile);
    };

    return (
        <div>
            <UserConteiner/>
            <PostFormConteiner onSubmit={callAddYourmessage}/>
            <div>{userComments}</div>
        </div>
    );
};