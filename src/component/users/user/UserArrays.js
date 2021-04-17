import {User} from "./User";
import React from "react";

export const UsersArrays = ({usersList}) => {
    return (
        usersList.map(item => {
            const profile = {
                name: item.name,
                img: item.photos.small,
                status: item.status,
                id: item.id,
                followed: item.followed
            };

            return (
                <User
                    key={profile.id}
                    profile={profile}
                />
            );
        })
    );
};
