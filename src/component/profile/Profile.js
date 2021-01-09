import React from "react";
import ProfileStyle from "./profile.module.scss";
import {Info} from "./info/Info.js";
import {MyPost} from "./myPost/MyPost.js";

export const Profile = (props) => {
	const {store} = props;
	const profile = store.getState().profile;
	const infoArr = profile.info.map(item => <Info text={item} /> );
	const myPost = profile.post.map(item => <MyPost text={item.text} />);
	const ref = React.createRef();

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
				<input type="text" ref={ref} className={ProfileStyle.formInput} onChange={() => store.changeInputActionCreator({}, ref)} />
				<input type="button" className={ProfileStyle.formBtn} value="Send" onClick={() => store.addPostActionCreator({}, ref)} />
			</form>
			{myPost}
		</div>
	)
};