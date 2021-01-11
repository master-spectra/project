import React from "react";
import HeaderStyle from "./header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<div className={HeaderStyle.header}>
			<div className="wrapper">
				<NavLink to="/" className={HeaderStyle.logo}></NavLink>
			</div>
		</div>	
	);
};