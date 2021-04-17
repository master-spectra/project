import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";
import {
    addPostActionCreator,
    getStatusThunkCreator,
    profileThunkCreator, setUpdatePhotoActionCreator,
} from "../../state/reducers/profileReducer";
import {compose} from "redux";
import {getMyProfileOnHeaderThunkCreator} from "../../state/reducers/authReducer";
import {getIdSelect, getIsUpdatePhoto, getUserCommentSelect} from "../../utils/reselect/reselect";

export const ProfileConteinerAPI = (props) => {
    const {getMyProfile, profileThunk, match, getStatus, userId, userComment, isUpdatePhoto, setIsUpdatePhoto} = props;

    useEffect(() => {
        if (!match.params.userId && !userId) {
            getMyProfile();
        };

        profileThunk(match.params.userId || userId);
        getStatus(match.params.userId || userId);
    }, [!match.params.userId]);

    useEffect(() => {
        if (isUpdatePhoto) {
            profileThunk(userId);
            setIsUpdatePhoto(false);
        };
    }, [isUpdatePhoto]);

    return <Profile userId={!!match.params.userId} userComment={userComment}/>;
};

const mapStateToProps = state => {
    return {
        userComment: getUserCommentSelect(state),
        userId: getIdSelect(state),
        isUpdatePhoto: getIsUpdatePhoto(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        profileThunk: id => {
            dispatch(profileThunkCreator(id));
        },
        getStatus: userId => {
            dispatch(getStatusThunkCreator(userId));
        },
        getMyProfile: () => {
            dispatch(getMyProfileOnHeaderThunkCreator())
        },
        addYourMessage: (input, textChecker) => {
            dispatch(addPostActionCreator(input, textChecker));
        },
        setIsUpdatePhoto: isUpdate => {
            dispatch(setUpdatePhotoActionCreator(isUpdate));
        }
    };
};

const ProfileConteiner = compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(ProfileConteinerAPI);
export default ProfileConteiner;