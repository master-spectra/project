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
    return state.auth.isFetching;
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

export const getIsSubmittingSelect = state => {
    return state.auth.isSubmitting;
};

export const getStatusSelect = state => {
    return state.profile.status;
};

export const getInputValueSelect = state => {
    return state.profile.inputValue;
};

export const getMyProfileSelect = state => {
    return state.myProfile;
};

export const getMessageListSelect = state => {
    return state.message.userComment;
};

export const getMessageInputValueSelect = state => {
    return state.message.inputValue;
};

export const getStatusCodeSelect = state => {
    return state.auth.code;
};

export const getIsUpdatePhoto = state => {
    return state.profile.isUpdatePhoto;
};
