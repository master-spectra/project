import React from "react";
import MyPostStyle from "./myPost.module.scss";

export const MyPost = (props) => {
	const {text, likeCounter, likePost, index, className} = props;
	const post = React.createRef();
	const likeBtn = React.createRef();
	const likePostTextChacker = "LIKE POST";

	const callLikePost = () => {
		likePost({}, likeBtn, likePostTextChacker, index);
	};

	return (
		<div ref={post} className={MyPostStyle.myPost}>
			<div className={MyPostStyle.img}></div>
			<div className={MyPostStyle.textWrap}>
				<p className={MyPostStyle.text}>{text}</p>
				<div className="likeWrap">
					<button onClick={callLikePost} className={MyPostStyle.like}>
						<span ref={likeBtn} className={"far fa-heart " + className[index].status}></span>
					</button>
					<span className={MyPostStyle.likeCounter}>
						{likeCounter}						
					</span>
				</div>
			</div>
		</div>	
	);
};