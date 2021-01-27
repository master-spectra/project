import React from "react";
import MyPostStyle from "./myPost.module.scss";

export const MyPost = (props) => {
    const {text, likeCounter, index, className, likePost} = props;
    const post = React.createRef();
    const likeBtn = React.createRef();

    const callLikePost = () => {
        likePost(likeBtn, index);
    };

    return (
        <div ref={post} className={MyPostStyle.myPost}>
            <div className={MyPostStyle.img}></div>
            <div className={MyPostStyle.textWrap}>
                <p className={MyPostStyle.text}>{text}</p>
                <div className={MyPostStyle.likeWrap}>
                    <button onClick={callLikePost} className={MyPostStyle.like}>
                        <span ref={likeBtn} className={"fa-heart " + className[index].status}></span>
                    </button>
                    <span className={MyPostStyle.likeCounter}>
						{likeCounter}
					</span>
                </div>
            </div>
        </div>
    );
};
