export const addPostActionCreator = (input, textCheker) => {
    return {type: textCheker, input: input.current.value};
};

export const changeInputActionCreator = (input, textCheker) => {
    return {type: textCheker, input: input.current.value};
};

export const likePostActionCreator = (likeBtn, index) => {
    return {type: "LIKE POST", btn: likeBtn.current, index: index};
};

export const followingUserActionCreator = (btn, id) => {
    return {type: "FOLLOW ON USER", btn: btn, id: id};
};

export const unFollowingUserActionCreator = (btn, id) => {
    return {type: "UNFOLLOW ON USER", btn: btn, id: id};
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

export const authActionCreator = (data, isAuth) => {
    return {type: "AUTH FOR SITE", data: {...data}, isAuth: isAuth};
};

export const followInProgressActionCreator = status => {
    return {type: "TOGGLE FOLLOWING", isFollow: status};
};

export const loadingInProgressActionCreator = status => {
    return {type: "LOADING IN PROGRESS", status: status};
};

export const getStatusActionCreator = status => {
    return {type: "GET STATUS", status: status};
};

export const updateStatusActionCreator = status => {
    return {type: "UPDATE STATUS", status: status};
};

export const setStatusActionCreator = status => {
    return {type: "SET STATUS", status: status};
};

export const getIdUsersActionCreator = id => {
    return {type: "GET ID", id: id};
};