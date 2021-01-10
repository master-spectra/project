import React from "react";
import ProfileStyle from "./profile.module.scss";
import {Info} from "./info/Info";
import {MyPost} from "./myPost/MyPost";

export const Profile = (props) => {
	const {profile, addPost, changeInput} 	= props;
	const ref 								= React.createRef();
	
	const infoArr 							= profile.info.map(item => <Info text={item} /> );
	const myPost 							= profile.post.map(item => <MyPost text={item.text} />);
	
	const addPostCheckerForProfile 			= "ADD POST";	
	const changeInputCheckerForProfile 		= "CHANGE INPUT PROFILE";
	
	const callChangeInput = () => {
		changeInput({}, ref, profile.value, changeInputCheckerForProfile);
	};

	const callAddPost = () => {
		addPost({}, ref, profile.post, addPostCheckerForProfile);
	};

	return (
		<div className={ProfileStyle.profile}>
			<div className={ProfileStyle.backgroundImage}></div>
			<div className={ProfileStyle.user}>
				<div className={ProfileStyle.imgUser}></div>
				<div className={ProfileStyle.userInfoWrap}>
					{infoArr}
				</div>
			</div>
			<form action="#" className={ProfileStyle.formSendPost}>
				<h3 className={ProfileStyle.formTitle}>
					My Post
				</h3>
				<input 
					type="text" 
					value={profile.value} 
					ref={ref} 
					className={ProfileStyle.formInput} onChange={callChangeInput} 
				/>
				<input 
					type="button" 
					className={ProfileStyle.formBtn} 
					value="Send" 
					onClick={callAddPost} 
				/>
			</form>
			{myPost}
		</div>
	)
};