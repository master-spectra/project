import React from "react";
import MyPostStyle from "./myPost.module.scss";

export const MyPost = (props) => {
	const {text, likeCounter, likePost, index} = props;
	const post = React.createRef();
	const likeBtn = React.createRef();
	const likePostTextChacker = "LIKE POST";

	const callLikePost = () => {
		likePost({}, post, likeBtn, likePostTextChacker, index);
	};

	return (
		<div ref={post} className={MyPostStyle.myPost}>
			<div className={MyPostStyle.img}></div>
			<div className={MyPostStyle.textWrap}>
				<p className={MyPostStyle.text}>{text}</p>
				<button onClick={callLikePost} className={MyPostStyle.like}>
					<span ref={likeBtn} className={`far fa-heart ${MyPostStyle.iconLike}`}></span>
					<span className={MyPostStyle.likeCounter}>
						{likeCounter}						
					</span>
				</button>
			</div>
		</div>	
	);
};