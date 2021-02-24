import React, {Component} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {
    likePostActionCreator,
    setProfileActionCreator
} from "../../state/actionCreator/actionCreator";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../api/api";

export class ProfileConteinerAPI extends Component {
    componentDidMount = () => {
        const {setProfile, match} = this.props;

        if (!match.params.userId) {
            match.params.userId = 2;
        };

        getProfile(match)
            .then(data => {
                setProfile(data);
            });
    }

    render = () => {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        userComment: state.profile.userComment,
        currentProfile: state.profile.currentProfile,
        profileId: state.myProfile.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        likePost: (likeBtn, index) => {
            dispatch(likePostActionCreator(likeBtn, index))
        },
        setProfile: profile => {
            dispatch(setProfileActionCreator(profile))
        }
    };
};

const WithRouterProfileConteiner = withRouter(ProfileConteinerAPI);

export const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfileConteiner);