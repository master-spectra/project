import {
    changePageActionCreator,
} from "../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import React, {Component} from "react";
import {Loader} from "../loader/Loader";
import {Users} from "./Users";
import {getUsersThunkCreator} from "../../state/reducers/usersReducer";
import {
    getCurrentPageSelect,
    getIsFetchingSelect,
    getPageSizeSelect,
    getTotalUserCountSelect,
    getUsersSelect
} from "../../utils/reselect/reselect";

export class UsersAPI extends Component {
    componentDidMount = () => {
        const {currentPage, pageSize, getUsersThunk} = this.props;
        getUsersThunk(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize, changePage, getUsersThunk} = this.props;
        changePage(pageNumber);
        getUsersThunk(pageNumber, pageSize);
    }

    render = () => {
        const {isFetching} = this.props;
        return isFetching ? <Loader/> : <Users {...this.props} onPageChanged={pageNumber => this.onPageChanged(pageNumber)}/>;
    }
}

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