const authInit = {
    resultCode: null,
    messages: null,
    data: {
        id: null,
        email: null,
        login: null
    }
};

export const authReducer = (state = authInit, action) => {
    const newState = {...state, ...state.data};

    return newState;
};