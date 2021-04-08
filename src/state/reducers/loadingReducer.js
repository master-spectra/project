const loadingInit = {loading: true};

export const loaingReducer = (state = loadingInit, action) => {
    const newState = {...state};
    const loadingChecker = "LOADING IN PROGRESS";

    switch (true) {
        case loadingChecker === action.type:
            newState.loading = action.status;
            return newState;
        default:
            return newState;
    };
};