import {
    changePageActionCreator,
    fetchingActionCreator,
    followingUserActionCreator,
    setUsersActionCreator, unFollowingUserActionCreator
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
        const {isFetching} = this.props;
        const getUsers = () => {
            if (isFetching) {
                return <Loader/>;
            } else {
                return <Users {...this.props} onPageChanged={(pageNumber) => this.onPageChanged(pageNumber)} />;
            };
        };

        return getUsers();
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
        unFollowing: (btn, id) => {
            dispatch(unFollowingUserActionCreator(btn, id));
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