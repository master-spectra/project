import React from "react";
import MessegeStyle from "./messege.module.scss";
import {MyMessege} from "./myMessege/MyMessege";

export const Messege = (props) => {
	const {messege, addPost, changeInput} 	= props;
	const messegeLists 						= messege.messegeList.map(item => <MyMessege text={item.text} />)
	const ref 								= React.createRef();
	
	const addMessegeCheckerForMessege 		= "ADD MESSEGE";	
	const changeInputCheckerForMessege 		= "CHANGE INPUT MESSEGE";
	
	const callChangeInput = () => {
		changeInput({}, ref, messege.value, changeInputCheckerForMessege);
	};

	const callAddPost = () => {
		addPost({}, ref, messege.messegeList, addMessegeCheckerForMessege);
	};

	return (
		<div className={MessegeStyle.messege}>
			<div className={MessegeStyle.messegeList}>{messegeLists}</div>
			<form action="#" className={MessegeStyle.formSendPost}>
				<h3 className={MessegeStyle.formTitle}>
					Send messege
				</h3>
				<input 
					type="text" 
					value={messege.value} 
					ref={ref} 
					className={MessegeStyle.formInput} 
					onChange={callChangeInput} 
				/>
				<input 
					type="button" 
					className={MessegeStyle.formBtn} 
					value="Send" 
					onClick={callAddPost} 
				/>
			</form>
		</div>
	)	
};