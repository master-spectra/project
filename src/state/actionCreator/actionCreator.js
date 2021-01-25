export const addPostActionCreator = (input, textCheker) => {
    const action = {
        type: textCheker,
        input: input.current.value
    };

    return action;
};

export const changeInputActionCreator = (input, textCheker) => {
    const action = {
        type: textCheker,
        input: input.current.value
    };

    return action;
};

export const likePostActionCreator = (likeBtn, index) => {
    const likePostTextChacker = "LIKE POST";

    const action = {
        type: likePostTextChacker,
        btn: likeBtn.current,
        index: index
    };

    return action;
};

export const followingUserActionCreator = (btn, index) => {
    const followCheckerForUser = "FOLLOW ON USER";

    const action = {
        type: followCheckerForUser,
        btn: btn.current,
        index: index
    };

    return action;
};

export const setUsersActionCreator = (usersArray, totalUserCount) => {
    const setUsers = "SET USER";

    const action = {
        type: setUsers,
        usersArray: usersArray,
        totalUserCount: totalUserCount
    };

    return action;
};

export const changePageActionCreator = newPage => {
    const changePage = "CHANGE PAGE";

    const action = {
        type: changePage,
        page: newPage
    };

    return action;
};

export const fetchingActionCreator = fetching => {
    const toggleLoader = "TOGGLE LOADER";

    const action = {
        type: toggleLoader,
        isFetching: fetching
    };

    return action;
};