import React from "react";
import UsersStyle from "./users.module.scss"
import { User } from "./user/User";

export const Users = (props) =>  {
    const {usersList, following, pageSize, totalUserCount, currentPage, onPageChanged} = props;
    const pageCount = Math.ceil(totalUserCount / pageSize);
    const items = [];

    for (let i = 1; i <= pageCount; i++) {
        items.push(i);
    };

    return (
        <div>
            <div className={UsersStyle.listPage}>
                {
                    items.map(numberItem => {
                        return (
                            <span
                                className={currentPage === numberItem ? UsersStyle.selectedItem : ""}
                                onClick={() => onPageChanged(numberItem)}
                            >
                                {numberItem}
                            </span>
                        )
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
                                img={item.photos.large}
                                status={item.status}
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