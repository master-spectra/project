import React from "react";
import {PostFormConteiner} from "./profileForm/postFormConteiner";
import {UserConteiner} from "./user/UserConteiner";
import {MyPost} from "./myPost/MyPost";

export const Profile = (props) => {
    const {userComment, likePost, addYourMessege} = props;
    const addPostCheckerForProfileChecker = "ADD POST";
    const userComments = userComment.map((item, index) => {
        const postData = {
            likeCounter: item.likeCounter,
            text: item.comment,
            status: userComment,
            index: index
        };

        return (
            <MyPost
                postData={postData}
                key={index}
                likePost={
                    (likeBtn, index) => {
                        likePost(likeBtn, index);
                    }
                }
            />
        );
    })

    const callAddYourMessege = value => {
        addYourMessege(value, addPostCheckerForProfileChecker);
    };

    return (
        <div>
            <UserConteiner/>
            <PostFormConteiner onSubmit={callAddYourMessege}/>
            <div>{userComments}</div>
        </div>
    );
};