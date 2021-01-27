export const addPostActionCreator = (input, textCheker) => {
    return {type: textCheker, input: input.current.value};
};

export const changeInputActionCreator = (input, textCheker) => {
    return {type: textCheker, input: input.current.value};
};

export const likePostActionCreator = (likeBtn, index) => {
    return {type: "LIKE POST", btn: likeBtn.current, index: index};
};

export const followingUserActionCreator = (btn, index) => {
    return {type: "FOLLOW ON USER", btn: btn.current, index: index};
};

export const setUsersActionCreator = (usersArray, totalUserCount) => {
    return {type: "SET USER", usersArray: usersArray, totalUserCount: totalUserCount};
};

export const changePageActionCreator = newPage => {
    return {type: "CHANGE PAGE", page: newPage};
};

export const fetchingActionCreator = fetching => {
    return {type: "TOGGLE LOADER", isFetching: fetching};
};

export const setProfileActionCreator = profile => {
    return {type: "SET PROFILE", profile: {...profile}};
};