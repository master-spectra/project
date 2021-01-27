import React, {Component} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {likePostActionCreator, setProfileActionCreator} from "../../state/actionCreator/actionCreator";
import * as axios from "axios";

export class ProfileConteinerAPI extends Component {
    componentDidMount = () => {
        const {setProfile} = this.props;

        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
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


export const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(ProfileConteinerAPI);