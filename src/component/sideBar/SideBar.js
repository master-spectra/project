import React, {Component} from "react";
import sideBarStyle from "./sideBar.module.scss";
import {Link} from "./link/Link";

export const SideBar = (props) => {
	const {sideBar} = props;
	const link = sideBar.map(item => {
		return (
			<Link 
				path={item.link} 
				text={item.name} 
			/>
		)
	});

	return (
		<aside className={sideBarStyle.sideBar} >
			<ul className={sideBarStyle.menu}>
				{link}
			</ul>
		</aside>	
	)
};