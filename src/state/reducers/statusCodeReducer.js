const statusCodeInit = {code: ""};

export const statusCodeReducer = (state = statusCodeInit, action) => {
    const newState = {...state};
    const statusCodeChecker = "SET STATUS CODE";

    switch (true) {
        case statusCodeChecker === action.type:
            newState.code = action.code;
            return newState;
        default:
            return newState;
    };
};