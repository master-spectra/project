import React from "react";
import MyPostStyle from "./myPost.module.scss";

export const MyPost = props => {
    const {postData} = props;
    const post = React.createRef();

    return (
        <div ref={post} className={MyPostStyle.myPost}>
            <div className={MyPostStyle.img}></div>
            <div className={MyPostStyle.textWrap}>
                <p className={MyPostStyle.text}>{postData.text}</p>
            </div>
        </div>
    );
};
