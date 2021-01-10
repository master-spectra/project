import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import LinkStyle from "./link.module.scss";

export const Link = (props) => {
	const {path, text} = props;

	return (
		<li className={LinkStyle.menuItem}>
			<NavLink to={path} className={LinkStyle.menuLink} activeClassName={LinkStyle.active}>
				{text}
			</NavLink>
		</li>
	)
};