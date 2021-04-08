import {
    changePageActionCreator,
} from "../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import React, {Component} from "react";
import {Loader} from "../loader/Loader";
import {Users} from "./Users";
import {getUsersThunkCreator} from "../../state/reducers/usersReducer";
import {redirectHOC} from "../hoc/hoc";
import {compose} from "redux";

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
        usersList: state.users.listUser,
        totalUserCount: state.users.totalUserCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
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

export const UsersConteiner = compose(connect(mapStateToProps, mapDispatchToProps), redirectHOC)(UsersAPI);