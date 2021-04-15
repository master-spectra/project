import {MyPost} from "./MyPost";
import React from "react";

export const MyPostArrays = ({userComment}) => {
    return (
        userComment.map((item, index) => {
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
            )
        })
    );
};