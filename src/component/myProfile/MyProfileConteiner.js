import React, {Component} from "react";
import {connect} from "react-redux";
import {MyProfile} from "./MyProfile";
import {getMyProfileThunkCreator} from "../../state/reducers/getMyProfileReducer";

class MyProfileConteinerAPI extends Component {
    componentDidMount() {
        const {getMyProfile, myProfile} = this.props;
        getMyProfile(myProfile);
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
            dispatch(getMyProfileThunkCreator(profile));
        }
    };
};

export const MyProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(MyProfileConteinerAPI);