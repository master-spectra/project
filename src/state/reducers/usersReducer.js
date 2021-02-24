const usersInit = {
    listUser: [],
    totalUserCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true
};

export const usersReducer = (state = usersInit, action) => {
    const followCheckerForUser = "FOLLOW ON USER";
    const unFollowCheckerForUser = "UNFOLLOW ON USER";
    const setUserTextCheker = "SET USER";
    const changePage = "CHANGE PAGE";
    const toggleLoader = "TOGGLE LOADER";
    const newState = {...state};

    newState.listUser = state.listUser.map(item => {
        return item;
    });

    switch (true) {
        case action.type === followCheckerForUser:
            newState.listUser.forEach(item => {
                if (item.id === action.id && !item.followed) {
                    item.followed = true;
                    action.btn.textContent = "unfollow";
                };
            });

            return newState;
        case action.type === unFollowCheckerForUser:
            newState.listUser.forEach(item => {
                if (item.id === action.id && item.followed) {
                    item.followed = false;
                    action.btn.textContent = "follow";
                };
            });

            return newState;
        case action.type === setUserTextCheker:
            newState.listUser = [...action.usersArray];
            newState.totalUserCount = action.totalUserCount;

            return newState;
        case action.type === changePage:
            newState.currentPage = action.page;

             return newState;
        case action.type === toggleLoader:
            newState.isFetching = action.isFetching;

            return newState;
        default:
            return state;
    }
};
