import {
    changePage,
    changePageActionCreator,
    followingUserActionCreator,
    setUsersActionCreator
} from "../../state/actionCreator/actionCreator";
import { connect } from "react-redux";
import { Users } from "./Users";

const mapStateToProps = state => {
    return {
        usersList: state.users.listUser,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setState: (usersArray, totalUserCount) => {
            dispatch(setUsersActionCreator(usersArray, totalUserCount));
        },
        following: (btn, index) => {
            dispatch(followingUserActionCreator(btn, index));
        },
        changePage: (newPage) => {
            dispatch(changePageActionCreator(newPage));
        }
    }
};

export const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);