import React from "react";
import UsersStyle from "./users.module.scss"
import {User} from "./user/User";

export const Users = (props) => {
    const {usersList, following, pageSize, totalUserCount, currentPage, onPageChanged} = props;
    const counterPage = Math.ceil(totalUserCount / pageSize);
    const pageList = [];

    for (let i = 1; i <= counterPage; i++) {
        pageList.push(i);
    };

    return (
        <div>
            <div className={UsersStyle.listPage}>
                {
                    pageList.map((item, index) => {
                         return (
                             <span
                                 className={currentPage === item ? UsersStyle.selectedItem : null}
                                onClick={() => onPageChanged(item)}
                             >
                                 {item}
                             </span>
                         );
                    })
                }
            </div>
            <div>
                {
                    usersList.map((item, index) => {
                        return (
                            <User
                                name={item.name}
                                index={index}
                                key={index}
                                img={item.photos.large}
                                status={item.status}
                                id={item.id}
                                following={
                                    (btn, index) => {
                                        following(btn, index)
                                    }
                                }
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}