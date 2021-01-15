import React from "react";
import MyMessegeStyle from "./myMessege.module.scss";

export const MyMessege = (props) => {
	const {text} = props;

	return (
		<div className={MyMessegeStyle.myMessege}>
			<div className={MyMessegeStyle.img}></div>
			<div className={MyMessegeStyle.textWrap}>
				<p className={MyMessegeStyle.text}>{text}</p>
				<button className={MyMessegeStyle.answer}>Ответить</button>
			</div>
		</div>	
	);
};