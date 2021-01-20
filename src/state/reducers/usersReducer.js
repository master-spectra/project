const usersInit = {
    listUser: [
        {
            name: "Andrey",
            about: "lorem",
            location: {
                city: "Kiev",
                country: "Ukraine"
            },
            status: false,
            statusFollowing: "Following"
        },
        {
            name: "Andrey",
            about: "lorem",
            location: {
                city: "Kiev",
                country: "Ukraine"
            },
            status: false,
            statusFollowing: "Following"
        },
        {
            name: "Andrey",
            about: "lorem",
            location: {
                city: "Kiev",
                country: "Ukraine"
            },
            status: false,
            statusFollowing: "Following"
        },
        {
            name: "Andrey",
            about: "Text please",
            location: {
                city: "Kiev",
                country: "Ukraine"
            },
            status: false,
            statusFollowing: "Following"
        }
    ],
};

export const usersReducer = (state = usersInit, action) => {
    const followCheckerForUser = "FOLLOW ON USER";
    const newState = {...state};

    newState.listUser = state.listUser.map(item => {
        return {
            name: item.name,
            about: item.about,
            location: item.location,
            status: item.status,
            statusFollowing: item.statusFollowing
        };
    });

    switch (true) {
        case action.type === followCheckerForUser && newState.listUser[action.index].status === false:
            newState.listUser[action.index].status = !newState.listUser[action.index].status;
            newState.listUser[action.index].statusFollowing = "Unfollowing";

            return newState;
        case action.type === followCheckerForUser && newState.listUser[action.index].status === true:
            newState.listUser[action.index].status = !newState.listUser[action.index].status;
            newState.listUser[action.index].statusFollowing = "Following";

            return newState;
        default:
            return state;
    }
};
