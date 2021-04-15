import React from "react";
import SideBarStyle from "./sideBar.module.scss";
import {LinkList} from "./linkList/linkList";

export const SideBar = ({sideBar}) => {
    return (
        <aside className={SideBarStyle.sideBar}>
            <ul className={SideBarStyle.menu}><LinkList sideBar={sideBar}/></ul>
        </aside>
    );
};