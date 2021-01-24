import React, { Component } from "react";
import * as axios from "axios";
import UsersStyle from "./users.module.scss"
import { User } from "./user/User";

export class Users extends Component {
    componentDidMount = () => {
        const {setState, currentPage, pageSize} = this.props;

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(resolve => {
                setState(resolve.data.items, 54);
            });
    }

    onPageChanged = (pageNumber) => {
        const {setState, pageSize, changePage} = this.props;

        changePage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(resolve => {
                setState(resolve.data.items, 54);
            });
    }

    render = () => {
        const {usersList, following, pageSize, totalUserCount, currentPage} = this.props;
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
                                    onClick={() => this.onPageChanged(numberItem)}
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
}