import React, {Component} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {likePostActionCreator, setProfileActionCreator} from "../../state/actionCreator/actionCreator";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

export class ProfileConteinerAPI extends Component {
    componentDidMount = () => {
        const {setProfile, match} = this.props;

        if (!match.params.userId) {
            match.params.userId = 2;
        };

         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${match.params.userId}`)
            .then(resolve => {
                setProfile(resolve.data);
            });
    }

    render = () => {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        userComment: state.profile.userComment,
        currentProfile: state.profile.currentProfile
    };
};

const mapDispatchToProps = dispatch => {
    return {
        likePost: (likeBtn, index) => {
            dispatch(likePostActionCreator(likeBtn, index))
        },
        setProfile: (profile) => {
            dispatch(setProfileActionCreator(profile))
        }
    };
};

const WithRouterProfileConteiner = withRouter(ProfileConteinerAPI);

export const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(WithRouterProfileConteiner);