import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {addPostActionCreator, likePostActionCreator,} from "../../state/actionCreator/actionCreator";
import {withRouter} from "react-router-dom";
import {getStatusThunkCreator, profileThunkCreator,} from "../../state/reducers/profileReducer";
import {compose} from "redux";
import {getMyProfileOnHeaderThunkCreator} from "../../state/reducers/authReducer";
import {getIdSelect, getUserCommentSelect} from "../../utils/reselect/reselect";

export const ProfileConteinerAPI = props => {
    const {getMyProfile, profileThunk, match, getStatus, userId} = props;

    useEffect(() => {
        if (!match.params.userId && !userId) {
            getMyProfile();
        };

        profileThunk(match.params.userId || userId);
        getStatus(match.params.userId || userId);
    });

    return <Profile {...props} />;
};

const mapStateToProps = state => {
    return {
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