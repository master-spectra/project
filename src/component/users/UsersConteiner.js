import {
    changePageActionCreator,
    fetchingActionCreator,
    followingUserActionCreator,
    setUsersActionCreator
} from "../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import React, {Component} from "react";
import {Loader} from "../loader/Loader";
import {Users} from "./Users";
import {getUsers} from "../../api/api";

export class UsersAPI extends Component {
    componentDidMount = () => {
        const {setUsers, currentPage, pageSize, fetching} = this.props;

        fetching(true);
        getUsers(currentPage, pageSize)
            .then(data => {
                setUsers(data.items, 90);
                fetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        const {setUsers, pageSize, changePage, fetching} = this.props;

        fetching(true);
        changePage(pageNumber);

        getUsers(pageNumber, pageSize)
            .then(data => {
                setUsers(data.items, 90);
                fetching(false);
            });
    }

    render = () => {
        const {usersList, following, pageSize, totalUserCount, currentPage, isFetching} = this.props;

        return (
            isFetching
                ? <Loader/>
                : <Users
                    usersList={usersList}
                    following={following}
                    pageSize={pageSize}
                    totalUserCount={totalUserCount}
                    currentPage={currentPage}
                    onPageChanged={(pageNumber) => this.onPageChanged(pageNumber)}
                />
        );
    }
}

const mapStateToProps = state => {
    return {
        usersList: state.users.listUser,
        totalUserCount: state.users.totalUserCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUsers: (usersArray, totalUserCount) => {
            dispatch(setUsersActionCreator(usersArray, totalUserCount));
        },
        following: (btn, id) => {
            dispatch(followingUserActionCreator(btn, id));
        },
        changePage: newPage => {
            dispatch(changePageActionCreator(newPage));
        },
        fetching: isFetching => {
            dispatch(fetchingActionCreator(isFetching));
        }
    };
};

export const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);