import {getProfileOnHeader, loginOnSite, logoutOnSite} from "../../api/api";

const auth          = "auth/AUTH FOR SITE";
const isFetching    = "auth/TOGGLE LOADER";
const getId         = "auth/GET ID";
const setStatusCode = "auth/SET STATUS CODE";

const authInit = {
    id: null,
    isFetching: false,
    isAuth: false,
    code: null
};

export const authReducer = (state = authInit, action) => {
    const newState = {...state};

    switch (true) {
        case auth === action.type:
            newState.id     = action.data.id;
            newState.email  = action.data.email;
            newState.login  = action.data.login;
            newState.isAuth = action.isAuth;

            return newState;
        case isFetching === action.type:
            newState.isFetching = action.isFetching;
            return newState;
        case getId === action.type:
            newState.id = action.id;
            newState.isAuth = true;
            return newState;
        case setStatusCode === action.type:
            newState.code = action.code;
            return newState;
        default: return state;
    }
};

export const authActionCreator = (data, isAuth) => {
    return {type: auth, data: {...data}, isAuth: isAuth};
};

export const fetchingActionCreator = fetching => {
    return {type: isFetching, isFetching: fetching};
};

export const getIdUsersActionCreator = id => {
    return {type: getId, id: id};
};

export const setStatusCodeActionCreator = code => {
    return {type: setStatusCode, code: code};
};

export const getMyProfileOnHeaderThunkCreator = () => async dispatch => {
    dispatch(fetchingActionCreator(true));
    const response = await getProfileOnHeader();

    if (response.data.resultCode === 0) {
        dispatch(authActionCreator(response.data.data, true));
    } else {
        dispatch(authActionCreator({}, false));
    };

    dispatch(fetchingActionCreator(false));
};


export const loginOnSiteThunkCreator = formData => async dispatch => {
    const response = await loginOnSite(formData);

    if (response.data.resultCode === 0) {
        dispatch(getIdUsersActionCreator(response.data.data.userId));
        return null;
    };

    dispatch(setStatusCodeActionCreator(response.data.resultCode));
};

export const logoutOnSiteThunkCreator = () => async dispatch => {
    const response = await logoutOnSite();

    if (response.data.resultCode === 0) {
        dispatch(authActionCreator({}, false));
    };
};