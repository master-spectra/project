import React from "react";
import ProfileStyle from "./profile.module.scss";
import { Info } from "./info/Info";
import { MyPost } from "./myPost/MyPost";
import {addPostActionCreator, changeInputActionCreator} from "../../state/store";

export const Profile = (props) => {
	const {profile, className, dispatch} 	= props;
	const input 									= React.createRef();
	const changeInputCheckerForProfile 				= "CHANGE INPUT PROFILE";
	const addPostCheckerForProfile 					= "ADD POST";

	const userInfo = profile.userInfo.map(item => {
		return <Info text={item} />
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
		
	const callChangeInput = () => {
		dispatch(
			changeInputActionCreator(
				input, profile.inputValue, changeInputCheckerForProfile
			)
		);
	};

	const callAddYourMessege = () => {
		dispatch(
			addPostActionCreator(
				input, profile.userComment, addPostCheckerForProfile
			)
		);
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
					value={profile.inputValue}
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
			{allPostUser}
		</div>
	);
};