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
    const likePostTextChecker = "LIKE POST";

    const action = {
        type: likePostTextChecker,
        btn: likeBtn.current,
        index: index
    };

    return action;
};

export const followingUserActionCreator = (btn, index) => {
    const followCheckerForUserChecker = "FOLLOW ON USER";

    const action = {
        type: followCheckerForUserChecker,
        btn: btn.current,
        index: index
    };

    return action;
};

export const setUsersActionCreator = (usersArray, totalUserCount) => {
    const setUsersChecker = "SET USER";

    const action = {
        type: setUsersChecker,
        usersArray: usersArray,
        totalUserCount: totalUserCount
    };

    return action;
};

export const changePageActionCreator = newPage => {
    const changePageChecker = "CHANGE PAGE";

    const action = {
        type: changePageChecker,
        page: newPage
    };

    return action;
};

export const fetchingActionCreator = fetching => {
    const toggleLoaderChecker = "TOGGLE LOADER";

    const action = {
        type: toggleLoaderChecker,
        isFetching: fetching
    };

    return action;
};

export const setProfileActionCreator = profile => {
    const setProfileChecker						= "SET PROFILE";

    const action = {
        type: setProfileChecker,
        profile: {...profile}
    };

    console.log(action.profile);

    return action;
};