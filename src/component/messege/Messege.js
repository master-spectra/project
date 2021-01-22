import React from "react";
import MessegeStyle from "./messege.module.scss";
import { MessegeFormConteiner } from "./messegeForm/messegeFormConteiner";

export const Messege = (props) => {
	const {messegeList, getMessege} = props;

	return (
		<div className={MessegeStyle.messege}>
			<div className={MessegeStyle.listMessege}>{getMessege(messegeList)}</div>
			<MessegeFormConteiner />
		</div>
	);
};