import React from "react";
import UsersStyle from "./users.module.scss"
import {User} from "./user/User";

export const Users = (props) => {
    const {usersList, following, pageSize, totalUserCount, currentPage, onPageChanged, unFollowing} = props;
    const countPage = Math.ceil(totalUserCount / pageSize);
    const pageList = [];

    for (let i = 1; i <= countPage; i++) {
        pageList.push(i);
    };

    const getUsers = () => {
        return (
            usersList.map((item, index) => {
                return (
                    <User
                        name={item.name}
                        index={index}
                        key={index}
                        followed={item.followed}
                        img={item.photos.large}
                        status={item.status}
                        id={item.id}
                        following={
                            (btn, index) => {
                                following(btn, index)
                            }
                        }
                        unFollowing={
                            (btn, index) => {
                                unFollowing(btn, index)
                            }
                        }
                    />
                );
            })
        );
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
                                 key={index}
                             >
                                 {item}
                             </span>
                         );
                    })
                }
            </div>
            <div>
                {getUsers()}
            </div>
        </div>
    );
}