import {connect} from "react-redux";
import {loginOnSiteThunkCreator} from "../state/reducers/authReducer";
import {App} from "./App";

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        loginOnSite: formData => {
            dispatch(loginOnSiteThunkCreator(formData));
        }
    };
};

export const AppConteiner = connect(mapStateToProps, mapDispatchToProps)(App);
