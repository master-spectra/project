import React from "react";
import SideBarStyle from "./sideBar.module.scss";

export const SideBar = (props) => {
	const {sideBar, getLink} = props;

	return (
		<aside className={SideBarStyle.sideBar} >
			<ul className={SideBarStyle.menu}>
				{getLink(sideBar)}
			</ul>
		</aside>	
	);
};