const usersInit = {
    listUser: [],
    totalUserCount: 0,
    pageSize: 5,
    currentPage: 1
};

export const usersReducer = (state = usersInit, action) => {
    const followCheckerForUser = "FOLLOW ON USER";
    const setUserTextCheker = "SET USER";
    const changePage = "CHANGE PAGE";
    const newState = {...state};

    newState.listUser = state.listUser.map(item => {
        return item;
    });

    switch (true) {
        case action.type === followCheckerForUser && newState.listUser[action.index].followed === false:
            newState.listUser[action.index].followed = !newState.listUser[action.index].followed;
            action.btn.textContent = "Unfollow";

            return newState;
        case action.type === followCheckerForUser && newState.listUser[action.index].followed === true:
            newState.listUser[action.index].followed = !newState.listUser[action.index].followed;
            action.btn.textContent = "Follow";

            return newState;
        case action.type === setUserTextCheker:
            newState.listUser = [...action.usersArray];
            newState.totalUserCount = action.totalUserCount;

            return newState;
        case action.type === changePage:
            newState.currentPage = action.page;

             return newState;
        default:
            return state;
    }
};
