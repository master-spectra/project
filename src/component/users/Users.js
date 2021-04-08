import React from "react";
import UsersStyle from "./users.module.scss"
import {User} from "./user/User";

export const Users = (props) => {
    const {usersList, pageSize, totalUserCount, currentPage, onPageChanged} = props;
    const countPage = Math.ceil(totalUserCount / pageSize);
    const pageList = [];
    const users = usersList.map((item, index) => {
        const profile = {
            name: item.name,
            img: item.photos.small,
            status: item.status,
            id: item.id,
            followed: item.followed
        };

        return (
            <User
                key={index}
                profile={profile}
            />
        );
    });

    for (let i = 1; i <= countPage; i++) {
        pageList.push(i);
    };

    const pages = pageList.map((item, index) => {
        return (
            <span className={currentPage === item ? UsersStyle.selectedItem : null} onClick={() => onPageChanged(item)} key={index}>
                {item}
            </span>
        );
    });

    return (
        <div>
            <div className={UsersStyle.listPage}>{pages}</div>
            <div>{users}</div>
        </div>
    );
};