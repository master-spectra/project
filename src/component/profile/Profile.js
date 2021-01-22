import React from "react";
import { PostFormConteiner } from "./profileForm/postFormConteiner";
import { UserConteiner } from "./user/UserConteiner";

export const Profile = (props) => {
	const {userComment, allPostUser} = props;

	return (
		<div>
			<UserConteiner />
			<PostFormConteiner />
			<div>
				{allPostUser(userComment)}
			</div>
		</div>
	);
};