import {
    changePageActionCreator,
    fetchingActionCreator,
    followingUserActionCreator,
    setUsersActionCreator
} from "../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import React, {Component} from "react";
import * as axios from "axios";
import {Loader} from "../loader/Loader";
import {Users} from "./Users";

export class UsersAPI extends Component {
    componentDidMount = () => {
        const {setUsers, currentPage, pageSize, fetching} = this.props;

        fetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(resolve => {
                setUsers(resolve.data.items, 90);
                fetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        const {setUsers, pageSize, changePage, fetching} = this.props;

        fetching(true);
        changePage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(resolve => {
                setUsers(resolve.data.items, 90);
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
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUsers: (usersArray, totalUserCount) => {
            dispatch(setUsersActionCreator(usersArray, totalUserCount));
        },
        following: (btn, index) => {
            dispatch(followingUserActionCreator(btn, index));
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