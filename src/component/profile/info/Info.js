import React from "react";
import InfoStyle from "./info.module.scss";

export const Info = (props) => {
	const {text} = props;
	
	return (
		<p className={InfoStyle.userInfo}>{text}</p>
	);
};