import React from "react";
import MyPostStyle from "./myPost.module.scss";

export const MyPost = (props) => {
	const {text} = props;

	return (
		<div className={MyPostStyle.myPost}>
			<div className={MyPostStyle.img}></div>
			<p className={MyPostStyle.text}>{text}</p>
		</div>	
	);
};