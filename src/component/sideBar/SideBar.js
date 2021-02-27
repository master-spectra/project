import React from "react";
import SideBarStyle from "./sideBar.module.scss";
import {Link} from "./link/Link";

export const SideBar = (props) => {
    const {sideBar} = props;
    const link = sideBar.map((item, index) => <Link key={index} link={item.link} text={item.nameLink}/>);

    return (
        <aside className={SideBarStyle.sideBar}>
            <ul className={SideBarStyle.menu}>
                {link}
            </ul>
        </aside>
    );
};