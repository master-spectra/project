import React from "react";
import UsersStyle from "./users.module.scss";
import {UsersArrays} from "./user/UserArrays";
import {PageNation} from "./pagination/pageNation";

export const Users = props => {
    const {usersList} = props;
    const pageList = React.createRef();

    return (
        <div>
            <div className={UsersStyle.listPage} ref={pageList}><PageNation tabPageList={pageList} {...props}/></div>
            <div><UsersArrays usersList={usersList}/></div>
        </div>
    );
};