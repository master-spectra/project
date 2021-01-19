import React from "react";
import { MyPost } from "./myPost/MyPost";
import { User } from "./user/User";
import { PostForm } from "./profileForm/postForm";

export const Profile = (props) => {
	const {profile, className, dispatch} = props;

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
			<User userInfo={profile.userInfo}/>
			<PostForm profile={profile} dispatch={dispatch}/>
			<div>
				{allPostUser}
			</div>
		</div>
	);
};