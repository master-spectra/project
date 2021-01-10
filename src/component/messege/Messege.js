import React from "react";
import MessegeStyle from "./messege.module.scss";
import {MyPost} from "./myPost/MyPost.js";

export const Messege = (props) => {
	const {store} = props;
	const messege = store.getState().messege;
	const arr = messege.messegeList.map(item => <MyPost text={item.text} />)

	const changeInputChecker 	= "CHANGE INPUT MESSEGE";
	const addMessegeChecker 	= "ADD MESSEGE";

	const ref = React.createRef();
	
	return (
		<div className={MessegeStyle.messege}>
			<div className={MessegeStyle.messegeList}></div>
			<form action="#" className={MessegeStyle.formSendPost}>
				<h3 className={MessegeStyle.formTitle}>
					My Post
				</h3>
				<input type="text" value={messege.value} ref={ref} className={MessegeStyle.formInput} onChange={() => store.changeInputActionCreator({}, ref, messege.value, changeInputChecker)} />
				<input type="button" className={MessegeStyle.formBtn} value="Send" onClick={() => store.addPostActionCreator({}, ref, messege.messegeList, addMessegeChecker)} />
			</form>
			{arr}
		</div>
	)	
};