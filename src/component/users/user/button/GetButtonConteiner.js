import React from "react";
import {
    followingUserActionCreator,
    followInProgressActionCreator,
    unFollowingUserActionCreator
} from "../../../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import {GetButton} from "./GetButton";

const mapStateToProps = state => {
    return {
        isFollow: state.users.isFollow
    };
};

const mapDispatchToProps = dispatch => {
    return {
        following: (btn, id) => {
            dispatch(followingUserActionCreator(btn, id));
        },
        unFollowing: (btn, id) => {
            dispatch(unFollowingUserActionCreator(btn, id));
        },
        followInProgress: status => {
            dispatch(followInProgressActionCreator(status));
        }
    };
};

export const GetButtonConteiner = connect(mapStateToProps, mapDispatchToProps)(GetButton);