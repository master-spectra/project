import React from "react";
import ProfileStyle from "./profile.module.scss";
import {Info} from "./info/Info";
import {MyPost} from "./myPost/MyPost";

export const Profile = (props) => {
<<<<<<< HEAD
	const {profile, addYourMessege, changeInput} 	= props;
	const input 									= React.createRef();
	
	const addPostCheckerForProfile 					= "ADD POST";	
	const changeInputCheckerForProfile 				= "CHANGE INPUT PROFILE";

	const userInfo = profile.userInfo.map(item => {
		return <Info text={item} />
	});

	const myPost = profile.userComment.map(item => {
		return <MyPost text={item.comment} />
	});
=======
	const {profile, addPost, changeInput} 	= props;
	
	const addPostCheckerForProfile 			= "ADD POST";	
	const changeInputCheckerForProfile 		= "CHANGE INPUT PROFILE";

	const ref 								= React.createRef();
	const infoArr 							= profile.info.map(item => <Info text={item} /> );
	const myPost 							= profile.post.map(item => <MyPost text={item.text} />);
>>>>>>> 535bb1536cd541f82940fd83ffa1c569eca372ca
		
	const callChangeInput = () => {
		changeInput({}, input, profile.value, changeInputCheckerForProfile);
	};

	const callAddYourMessege = () => {
		addYourMessege({}, input, profile.userComment, addPostCheckerForProfile);
	};

	return (
		<div className={ProfileStyle.profile}>
			<div className={ProfileStyle.backgroundImage}></div>
			<div className={ProfileStyle.user}>
				<div className={ProfileStyle.imgUser}></div>
				<div className={ProfileStyle.userInfoWrap}>
					{userInfo}
				</div>
			</div>
			<form action="#" className={ProfileStyle.formSendPost}>
				<h3 className={ProfileStyle.formTitle}>
					My Post
				</h3>
				<input 
					type="text" 
					value={profile.value} 
					ref={input} 
					className={ProfileStyle.formInput} 
					onChange={callChangeInput} 
				/>
				<input 
					type="button" 
					className={ProfileStyle.formBtn} 
					value="Send" 
					onClick={callAddYourMessege} 
				/>
			</form>
			{myPost}
		</div>
	);
};