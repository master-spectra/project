import {reduxForm} from "redux-form";
import {Login} from "./Login";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const LoginConteinerForm = reduxForm({
    form: "login"
})(Login);

export const LoginConteinerAPI = connect(mapStateToProps, mapDispatchToProps)(LoginConteinerForm);
