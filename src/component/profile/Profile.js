import React from "react";
import {PostFormConteiner} from "./profileForm/postFormConteiner";
import {UserConteiner} from "./user/UserConteiner";
import {MyPost} from "./myPost/MyPost";

export const Profile = (props) => {
    const {userComment, likePost} = props;
    const getProfile = () => {
        return (
            userComment.map((item, index) => {
                return (
                    <MyPost
                        likeCounter={item.likeCounter}
                        text={item.comment}
                        className={userComment}
                        index={index}
                        key={index}
                        likePost={
                            (likeBtn, index) => {
                                likePost(likeBtn, index);
                            }
                        }
                    />
                );
            })
        );
    };

    return (
        <div>
            <UserConteiner/>
            <PostFormConteiner/>
            <div>
                {getProfile()}
            </div>
        </div>
    );
};