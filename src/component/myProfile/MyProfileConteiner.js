import React, {Component} from "react";
import {setProfileActionCreator} from "../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import {MyProfile} from "./MyProfile";
import {getProfileOnHeader} from "../../api/api";

class MyProfileConteinerAPI extends Component {
    componentDidMount() {
        const {getMyProfile} = this.props;

        getProfileOnHeader()
            .then(data => {
                getMyProfile(data.data);
            });
    }

    render() {
        return <MyProfile {...this.props}/>
    }
};

const mapStateToProps = state => {
    return {
        myProfile: state.myProfile
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMyProfile: profile => {
            dispatch(setProfileActionCreator(profile));
        }
    };
};

export const MyProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(MyProfileConteinerAPI);