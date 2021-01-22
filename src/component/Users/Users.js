import React from "react";
import * as axios from "axios";

export const Users = (props) => {
    const {usersList, setState, getUser} = props;
    const setUserTextCheker = "SET USER";

    if (usersList.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(resolve => {
                setState(setUserTextCheker, resolve.data.items);
            });
    };

    return (
        <div>{getUser(usersList)}</div>
    );
};