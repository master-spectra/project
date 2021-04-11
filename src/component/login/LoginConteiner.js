import {connect} from "react-redux";
import {loginOnSiteThunkCreator} from "../../state/reducers/authReducer";
import {Login} from "./Login";

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginOnSite: formData => {
            dispatch(loginOnSiteThunkCreator(formData));
        }
    };
};

export const LoginConteiner = connect(mapStateToProps, mapDispatchToProps)(Login);
