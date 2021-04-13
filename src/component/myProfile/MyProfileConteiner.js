import React, {useEffect} from "react";
import {connect} from "react-redux";
import {MyProfile} from "./MyProfile";
import {getMyProfileThunkCreator} from "../../state/reducers/getMyProfileReducer";
import {getMyProfileSelect} from "../../utils/reselect/reselect";

const MyProfileConteinerAPI = props => {
    const {getMyProfile, myProfile} = props;

    useEffect(() => {
        getMyProfile(myProfile);
    });

    return <MyProfile {...props}/>
};

const mapStateToProps = state => {
    return {
        myProfile: getMyProfileSelect(state)
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