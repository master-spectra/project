const authInit = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

export const authReducer = (state = authInit, action) => {
    const authChecker = "AUTH FOR SITE";
    const isFetchingChecker = "TOGGLE LOADER";
    const newState = {...state};

    switch (true) {
        case authChecker === action.type:
            newState.id = action.data.id;
            newState.email = action.data.email;
            newState.login = action.data.login;
            newState.isAuth = action.isAuth;

            return newState;
        case isFetchingChecker === action.type:
            newState.isFetching = action.isFetching;

            return newState;
        default:
            return state;
    }
};