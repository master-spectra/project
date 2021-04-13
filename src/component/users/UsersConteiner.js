import {changePageActionCreator} from "../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Loader} from "../loader/Loader";
import {Users} from "./Users";
import {getUsersThunkCreator} from "../../state/reducers/usersReducer";
import {
    getCurrentPageSelect,
    getIsFetchingSelect,
    getPageSizeSelect,
    getTotalUserCountSelect,
    getUsersSelect,
} from "../../utils/reselect/reselect";

export const UsersAPI = props => {
    const {isFetching, currentPage, pageSize, getUsersThunk, changePage} = props;
    const onPageChanged = pageNumber => {
        changePage(pageNumber);
        getUsersThunk(pageNumber, pageSize);
    }

    useEffect(() => {
        getUsersThunk(currentPage, pageSize);
    }, []);

    return isFetching ? <Loader/> : <Users {...props} onPageChanged={pageNumber => onPageChanged(pageNumber)}/>;
};

const mapStateToProps = state => {
    return {
        usersList: getUsersSelect(state),
        totalUserCount: getTotalUserCountSelect(state),
        pageSize: getPageSizeSelect(state),
        currentPage: getCurrentPageSelect(state),
        isFetching: getIsFetchingSelect(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changePage: newPage => {
            dispatch(changePageActionCreator(newPage));
        },
        getUsersThunk: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize));
        }
    };
};

export const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);