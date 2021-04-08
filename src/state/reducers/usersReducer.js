import {callFolowingOnUser, callUnFolowingOnUser, getUsers} from "../../api/api";
import {
    fetchingActionCreator, followingUserActionCreator,
    followInProgressActionCreator,
    setUsersActionCreator, unFollowingUserActionCreator
} from "../actionCreator/actionCreator";

const usersInit = {
    listUser: [],
    totalUserCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    isFollow: false
};

export const usersReducer = (state = usersInit, action) => {
    const followCheckerForUser      = "FOLLOW ON USER";
    const unFollowCheckerForUser    = "UNFOLLOW ON USER";
    const setUserTextCheker         = "SET USER";
    const changePage                = "CHANGE PAGE";
    const toggleFollowing           = "TOGGLE FOLLOWING";
    const toggleLoader              = "TOGGLE LOADER";
    const newState                  = {...state};

    newState.listUser = state.listUser.map(item => {
        return item;
    });

    switch (true) {
        case action.type === followCheckerForUser:
            newState.listUser.forEach(item => {
                if (item.id === action.id && !item.followed) {
                    item.followed = true;
                };
            });

            return newState;
        case action.type === unFollowCheckerForUser:
            newState.listUser.forEach(item => {
                if (item.id === action.id && item.followed) {
                    item.followed = false;
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
        case action.type === toggleFollowing:
            newState.isFollow = action.isFollow;
            return newState;
        default:
            return state;
    }
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(fetchingActionCreator(true));

        getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsersActionCreator(data.items, 90));
                dispatch(fetchingActionCreator(false));
            });
    };
};

export const followingThunkCreator = (btn, id) => {
    return dispatch => {
        dispatch(followInProgressActionCreator(true));

        callUnFolowingOnUser(id)
            .then(data => {
                if (!data.resultCode) {
                    dispatch(followInProgressActionCreator(false));
                    dispatch(unFollowingUserActionCreator(btn, id));
                };
            });
    };
};

export const unFollowingThunkCreator = (btn, id) => {
    return dispatch => {
        dispatch(followInProgressActionCreator(true));

        callFolowingOnUser(id)
            .then(data => {
                if (!data.resultCode) {
                    dispatch(followInProgressActionCreator(false));
                    dispatch(followingUserActionCreator(btn, id));
                };
            });
    };
};