import React from "react";
import ProfileStyle from "./profile.module.scss";
import {Info} from "./info/Info";
import {MyPost} from "./myPost/MyPost";

export const Profile = (props) => {
	const {store} 				= props;
	const profile 				= store.getState().profile;
	const ref 					= React.createRef();
	const infoArr				= profile.info.map(item => <Info text={item} /> );
	const myPost 				= profile.post.map(item => <MyPost text={item.text} />);
	const addPostChecker 		= "ADD POST";
	const changeInputChecker 	= "CHANGE INPUT PROFILE";
	
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
				<input type="text" value={profile.value} ref={ref} className={ProfileStyle.formInput} onChange={() => store.changeInputActionCreator({}, ref, profile.value, changeInputChecker)} />
				<input type="button" className={ProfileStyle.formBtn} value="Send" onClick={() => store.addPostActionCreator({}, ref, profile.post, addPostChecker)} />
			</form>
			{myPost}
		</div>
	)
};