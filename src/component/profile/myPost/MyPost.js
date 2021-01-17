import React from "react";
import MyPostStyle from "./myPost.module.scss";
import {likePostActionCreator} from "../../../state/store";

export const MyPost = (props) => {
    const {text, likeCounter, index, className, dispatch}   = props;
    const post                                              = React.createRef();
    const likeBtn                                           = React.createRef();
    const likePostTextChacker                               = "LIKE POST";

    const callLikePost = () => {
        dispatch(likePostActionCreator(likeBtn, likePostTextChacker, index));
    };

    return (
        <div ref={post} className={MyPostStyle.myPost}>
            <div className={MyPostStyle.img}/>
            <div className={MyPostStyle.textWrap}>
                <p className={MyPostStyle.text}>{text}</p>
                <div className={MyPostStyle.likeWrap}>
                    <button onClick={callLikePost} className={MyPostStyle.like}>
                        <span
                            ref={likeBtn}
                            className={"fa-heart " + className[index].status}
                        />
                    </button>
                    <span className={MyPostStyle.likeCounter}>
						{likeCounter}						
					</span>
                </div>
            </div>
        </div>
    );
};