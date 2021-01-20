import React from "react";
import { User } from "./user/User";

export const Users = (props) => {
    const {usersList, dispatch} = props;

    const users = usersList.map((item, index) => {
        return (
            <User
                dispatch={dispatch}
                name={item.name}
                statusFollowing={item.statusFollowing}
                index={index}
                about={item.about}
                location={item.location}
            />
        )
    });

    return (
        <div>{users}</div>
    )
};