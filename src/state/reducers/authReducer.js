import {getProfileOnHeader, loginOnSite} from "../../api/api";
import {authActionCreator, fetchingActionCreator, getIdUsersActionCreator} from "../actionCreator/actionCreator";

const authInit = {
    id: null,
    isFetching: false,
    isAuth: false
};

export const authReducer = (state = authInit, action) => {
    const authChecker = "AUTH FOR SITE";
    const isFetchingChecker = "TOGGLE LOADER";
    const getIdChecker = "GET ID";
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
        case getIdChecker === action.type:
            newState.id = action.id;
            newState.isAuth = true;
            return newState;
        default:
            return state;
    }
};

export const getMyProfileOnHeaderThunkCreator = () => {
    return dispatch => {
        dispatch(fetchingActionCreator(true));
        getProfileOnHeader()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authActionCreator(data.data, true));
                } else {
                    dispatch(authActionCreator({}, false));
                };

                dispatch(fetchingActionCreator(false));
            });
    };
};


export const loginOnSiteThunkCreator = formData => {
    return dispatch => {
        loginOnSite(formData)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getIdUsersActionCreator(response.data.data.userId));
                };
            });
    };
};