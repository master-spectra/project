import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {isAuth: state.auth.isAuth};
};

const mapDispatchToProps = dispatch => {
    return {}
};

export const redirectHOC = Component => {
    const redirectComponent = props => {
        const {isAuth} = props;

        if (!isAuth) {
            return <Redirect to={"/login"}/>;
        } else {
            return <Component {...props}/>;
        };
    };
    const redirectComponentConnect = connect(mapStateToProps, mapDispatchToProps)(redirectComponent);

    return redirectComponentConnect;
};