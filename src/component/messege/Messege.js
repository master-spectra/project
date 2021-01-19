import React from "react";
import MessegeStyle from "./messege.module.scss";
import { MyMessege } from "./myMessege/MyMessege";
import { MessegeForm } from "./messegeForm/messegeForm";

export const Messege = (props) => {
	const {messege, dispatch} = props;

	const messegeLists = messege.messegeList.map(item => {
		return <MyMessege text={item.text}/>
	});

	return (
		<div className={MessegeStyle.messege}>
			<div className={MessegeStyle.listMessege}>{messegeLists}</div>
			<MessegeForm messege={messege} dispatch={dispatch} />
		</div>
	);
};