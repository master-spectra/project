import {callFolowingOnUser, callUnFolowingOnUser, getUsers} from "../../api/api";
import {fetchingActionCreator} from "./authReducer";
const followForUser      = "users/FOLLOW ON USER";
const unFollowForUser    = "users/UNFOLLOWUNFOLLOW ON USER";
const setUser            = "users/SET USER";
const changePage         = "users/CHANGE PAGE";
const toggleFollowing    = "users/TOGGLE FOLLOWING";
const toggleLoader       = "users/TOGGLE LOADER";

const usersInit = {
    listUser: [],
    totalUserCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFollow: false
};

const followingUnFollowing = (newState, action) => {
    newState.listUser.forEach(item => {
        if (item.id === action.id) {
            item.followed = !item.followed;
        };
    });
};

export const usersReducer = (state = usersInit, action) => {
    const newState                  = {...state};

    newState.listUser = state.listUser.map(item => {
        return item;
    });

    switch (true) {
        case action.type === followForUser:
            followingUnFollowing(newState, action);
            return newState;
        case action.type === unFollowForUser:
            followingUnFollowing(newState, action);
            return newState;
        case action.type === setUser:
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
        default: return state;
    }
};

const followInProgressActionCreator = status => {
    return {type: toggleFollowing, isFollow: status};
};

const setUsersActionCreator = (usersArray, totalUserCount) => {
    return {type: setUser, usersArray: usersArray, totalUserCount: totalUserCount};
};

export const changePageActionCreator = newPage => {
    return {type: changePage, page: newPage};
};

const followUnFollowActionCreator = (type, id) => {
    return {type: type, id: id};
};

export const getUsersThunkCreator = (currentPage, pageSize) => async dispatch => {
    dispatch(fetchingActionCreator(true));

    const response = await getUsers(currentPage, pageSize);

    dispatch(setUsersActionCreator(response.data.items, 200));
    dispatch(fetchingActionCreator(false));
};

const followUnFollowMIX = async (type, id, dispatch, DALFunction) => {
    dispatch(followInProgressActionCreator(true));
    const response = await DALFunction(id);

    if (response.data.resultCode === 0) {
        dispatch(followUnFollowActionCreator(type, id));
        dispatch(followInProgressActionCreator(false));
    };
};

export const followingThunkCreator = id => dispatch => followUnFollowMIX(followForUser, id, dispatch, callFolowingOnUser);

export const unFollowingThunkCreator = id => dispatch =>  followUnFollowMIX(unFollowForUser, id, dispatch, callUnFolowingOnUser);