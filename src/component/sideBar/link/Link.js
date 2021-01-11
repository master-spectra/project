import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import LinkStyle from "./link.module.scss";

export const Link = (props) => {
	const {link, text} = props;

	return (
		<li className={LinkStyle.menuItem}>
			<NavLink to={link} className={LinkStyle.menuLink} activeClassName={LinkStyle.active}>
				{text}
			</NavLink>
		</li>
	);
};