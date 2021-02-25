import React from "react";
import MyPostStyle from "./myPost.module.scss";

export const MyPost = (props) => {
    const {postData, likePost} = props;
    const post = React.createRef();
    const likeBtn = React.createRef();

    const callLikePost = () => {
        likePost(likeBtn, postData.index);
    };

    return (
        <div ref={post} className={MyPostStyle.myPost}>
            <div className={MyPostStyle.img}></div>
            <div className={MyPostStyle.textWrap}>
                <p className={MyPostStyle.text}>{postData.text}</p>
                <div className={MyPostStyle.likeWrap}>
                    <button onClick={callLikePost} className={MyPostStyle.like}>
                        <span ref={likeBtn} className={"fa-heart " + postData.status[postData.index].status}></span>
                    </button>
                    <span className={MyPostStyle.likeCounter}>{postData.likeCounter}</span>
                </div>
            </div>
        </div>
    );
};
