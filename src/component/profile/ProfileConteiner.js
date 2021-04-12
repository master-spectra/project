import React, {Component} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {
    addPostActionCreator,
    likePostActionCreator,
} from "../../state/actionCreator/actionCreator";
import {withRouter} from "react-router-dom";
import {
    getStatusThunkCreator,
    profileThunkCreator,
} from "../../state/reducers/profileReducer";
import {compose} from "redux";
import {getMyProfileOnHeaderThunkCreator} from "../../state/reducers/authReducer";
import {getCurrentProfileSelect, getIdSelect, getUserCommentSelect} from "../../utils/reselect/reselect";

export class ProfileConteinerAPI extends Component {
    componentDidMount = () => {
        const {getMyProfile, profileThunk, match, getStatus, userId} = this.props;

        if (!match.params.userId && !userId) {
            getMyProfile();
        };

        profileThunk(match.params.userId || userId);
        getStatus(match.params.userId || userId);
    }

    render = () => {
        return <Profile {...this.props} />
    }
};

const mapStateToProps = state => {
    return {
        currentProfile: getCurrentProfileSelect(state),
        userComment: getUserCommentSelect(state),
        userId: getIdSelect(state)
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
        },
        getMyProfile: () => {
            dispatch(getMyProfileOnHeaderThunkCreator())
        },
        addYourMessege: (input, textChecker) => {
            dispatch(addPostActionCreator(input, textChecker));
        }
    };
};

export const ProfileConteiner = compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(ProfileConteinerAPI);