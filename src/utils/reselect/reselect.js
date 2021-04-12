export const getUsersSelect = state => {
    return state.users.listUser;
};

export const getTotalUserCountSelect = state => {
    return state.users.totalUserCount;
};

export const getPageSizeSelect = state => {
    return state.users.pageSize;
};

export const getCurrentPageSelect = state => {
    return state.users.currentPage;
};

export const getIsFetchingSelect = state => {
    return state.users.isFetching;
};

export const getIsAuthSelect = state => {
    return state.auth.isAuth;
};

export const getIsFollowSelect = state => {
    return state.users.isFollow;
};

export const getSideBarSelect = state => {
    return state.sideBar;
};

export const getCurrentProfileSelect = state => {
    return state.profile.currentProfile;
};

export const getUserCommentSelect = state => {
    return state.profile.userComment;
};

export const getIdSelect = state => {
    return state.auth.id;
};
