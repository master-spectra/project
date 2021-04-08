import React, {Component} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {
    likePostActionCreator,
} from "../../state/actionCreator/actionCreator";
import {withRouter} from "react-router-dom";
import {
    getStatusThunkCreator,
    profileThunkCreator,
} from "../../state/reducers/profileReducer";
import {redirectHOC} from "../hoc/hoc";
import {compose} from "redux";

export class ProfileConteinerAPI extends Component {
    componentDidMount = () => {
        const {profileThunk, match, getStatus, userId} = this.props;

        profileThunk(match.params.userId || userId);
        getStatus(match.params.userId || userId);
    }

    render = () => {
        return <Profile {...this.props} />
    }
};

const mapStateToProps = state => {
    return {
        currentProfile: state.profile.currentProfile,
        userComment: state.profile.userComment,
        userId: state.auth.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        likePost: (likeBtn, index) => {
            dispatch(likePostActionCreator(likeBtn, index));
        },
        profileThunk: id => {
            dispatch(profileThunkCreator(id));
        },
        getStatus: userId => {
            dispatch(getStatusThunkCreator(userId));
        }
    };
};

export const ProfileConteiner = compose(connect(mapStateToProps, mapDispatchToProps), withRouter, redirectHOC)(ProfileConteinerAPI);