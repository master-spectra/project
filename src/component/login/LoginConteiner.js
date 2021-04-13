import {connect} from "react-redux";
import {loginOnSiteThunkCreator} from "../../state/reducers/authReducer";
import {Login} from "./Login";
import {getIsAuthSelect, getStatusCodeSelect} from "../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        isAuth: getIsAuthSelect(state),
        statusCode: getStatusCodeSelect(state)
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
