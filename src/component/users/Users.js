import React from "react";
import UsersStyle from "./users.module.scss"
import {User} from "./user/User";

export const Users = (props) => {
    const {followInProgress, isFollow, usersList, following, pageSize, totalUserCount, currentPage, onPageChanged, unFollowing} = props;
    const countPage = Math.ceil(totalUserCount / pageSize);

    const getUsers = () => {
        return (
            usersList.map((item, index) => {
                const profile = {
                    name: item.name,
                    img: item.photos.large,
                    status: item.status,
                    id: item.id,
                    followed: item.followed
                };

                return (
                    <User
                        key={index}
                        profile={profile}
                        isFollow={isFollow}
                        followInProgress={status => followInProgress(status)}
                        following={(btn, id) => following(btn, id)}
                        unFollowing={(btn, id) => unFollowing(btn, id)}
                    />
                );
            })
        );
    };
    const getPage = () => {
        const pageList = [];

        for (let i = 1; i <= countPage; i++) {
            pageList.push(i);
        };

        const getStatus = (item) => {
            if (currentPage === item)  {
                return UsersStyle.selectedItem;
            } else {
                return null;
            };
        };

        return (
            pageList.map((item, index) => {
                return (
                    <span className={getStatus(item)} onClick={() => onPageChanged(item)} key={index}>
                        {item}
                    </span>
                );
            })
        );
    };

    return (
        <div>
            <div className={UsersStyle.listPage}>
                {getPage()}
            </div>
            <div>
                {getUsers()}
            </div>
        </div>
    );
}