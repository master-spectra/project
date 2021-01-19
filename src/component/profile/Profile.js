import React from "react";
import { Info } from "./info/Info";
import { MyPost } from "./myPost/MyPost";
import { User } from "./user/User";
import { PostForm } from "./postForm/postForm";

export const Profile = (props) => {
	const {profile, className, dispatch} = props;

	const userInfo = profile.userInfo.map(item => {
		return <Info text={item}/>
	});

	const allPostUser = profile.userComment.map((item, index) => {
		return (
			<MyPost
				className={className}
				text={item.comment}
				dispatch={dispatch}
				likeCounter={item.likeCounter}
				index={index}
			/>
		)
	});

	return (
		<div>
			<User userInfo={userInfo}/>
			<PostForm profile={profile} dispatch={dispatch}/>
			<div>
				{allPostUser}
			</div>
		</div>
	);
};