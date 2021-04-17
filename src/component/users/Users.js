import React from "react";
import UsersStyle from "./users.module.scss";
import {UsersArrays} from "./user/UserArrays";
import {PageNation} from "./pagination/pageNation";

export const Users = props => {
    const {usersList} = props;

    return (
        <div>
            <div className={UsersStyle.listPage}><PageNation {...props}/></div>
            <div><UsersArrays usersList={usersList}/></div>
        </div>
    );
};