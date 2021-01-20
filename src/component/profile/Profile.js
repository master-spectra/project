import React from "react";
import { MyPost } from "./myPost/MyPost";
import { User } from "./user/User";
import { PostForm } from "./profileForm/postForm";

export const Profile = (props) => {
	const {profile, dispatch} = props;
	const userComment = profile.userComment;

	const allPostUser = userComment.map((item, index) => {
		return (
			<MyPost
				likeCounter={item.likeCounter}
				text={item.comment}
				className={userComment}
				dispatch={dispatch}
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