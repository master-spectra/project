import React from "react";
import { PostFormConteiner } from "./profileForm/postFormConteiner";
import { UserConteiner } from "./user/UserConteiner";
import { MyPost } from "./myPost/MyPost";

export const Profile = (props) => {
	const {userComment, likePost} = props;

	return (
		<div>
			<UserConteiner />
			<PostFormConteiner />
			<div>
				{
					userComment.map((item, index) => {
						return (
							<MyPost
									likeCounter={item.likeCounter}
									text={item.comment}
									className={userComment}
									index={index}
									likePost={
										(likeBtn, index) => {
											likePost(likeBtn, index);
										}
									}
							/>
						);
					})
				}
			</div>
		</div>
	);
};