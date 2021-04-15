import {Link} from "../link/Link";
import React from "react";

export const LinkList = ({sideBar}) => {
    return sideBar.map((item, index) => <Link key={index} link={item.link} text={item.nameLink}/>);
};