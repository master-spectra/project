import React, {Component} from "react";
import SideBarStyle from "./sideBar.module.scss";
import {Link} from "./link/Link";

export const SideBar = (props) => {
	const {sideBar} = props;
	const link = sideBar.map(item => <Link path={item.link} text={item.name}/>)

	return (
		<aside className={SideBarStyle.sideBar} >
			<ul className={SideBarStyle.menu}>
				{link}
			</ul>
		</aside>	
	)
};