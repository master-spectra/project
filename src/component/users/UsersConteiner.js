import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Loader} from "../loader/Loader";
import {Users} from "./Users";
import {changePageActionCreator, getUsersThunkCreator} from "../../state/reducers/usersReducer";
import {
    getCurrentPageSelect,
    getIsFetchingSelect,
    getPageSizeSelect,
    getTotalUserCountSelect,
    getUsersSelect,
} from "../../utils/reselect/reselect";

export const UsersAPI = props => {
    const {isFetching, currentPage, pageSize, getUsersThunk} = props;

    useEffect(() => {
        getUsersThunk(currentPage, pageSize);
    }, []);

    return isFetching ? <Loader/> : <Users {...props}/>;
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

const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
export default UsersConteiner;