import React from "react";
import MessegeStyle from "./messege.module.scss";
import {MyMessege} from "./myMessege/MyMessege";

export const Messege = (props) => {
<<<<<<< HEAD
	const {messege, addYourMessege, changeInput} 	= props;
	const input 									= React.createRef();
			
	const addMessegeCheckerForMessege 				= "ADD MESSEGE";	
	const changeInputCheckerForMessege 				= "CHANGE INPUT MESSEGE";
	
	const messegeLists 	= messege.messegeList.map(item => {
		return <MyMessege text={item.text} />
	});
	
=======
	const {messege, addPost, changeInput} 	= props;
	
	const addMessegeCheckerForMessege 		= "ADD MESSEGE";	
	const changeInputCheckerForMessege 		= "CHANGE INPUT MESSEGE";

	const messegeLists 						= messege.messegeList.map(item => <MyMessege text={item.text} />)
	const ref 								= React.createRef();
		
>>>>>>> 535bb1536cd541f82940fd83ffa1c569eca372ca
	const callChangeInput = () => {
		changeInput({}, input, messege.value, changeInputCheckerForMessege);
	};

	const callAddYourMessege = () => {
		addYourMessege({}, input, messege.messegeList, addMessegeCheckerForMessege);
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
					ref={input} 
					className={MessegeStyle.formInput} 
					onChange={callChangeInput} 
				/>
				<input 
					type="button" 
					className={MessegeStyle.formBtn} 
					value="Send" 
					onClick={callAddYourMessege} 
				/>
			</form>
		</div>
	);
};