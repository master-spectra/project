import React, {Component} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutOnSiteThunkCreator} from "../../state/reducers/authReducer";

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logoutOnSite: () => {
            dispatch(logoutOnSiteThunkCreator());
        }
    };
};

export const HeaderConteiner = connect(mapStateToProps, mapDispatchToProps)(Header);