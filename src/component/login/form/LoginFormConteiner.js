import {reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {LoginForm} from "./LoginForm";

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const LoginConteiner = compose(connect(mapStateToProps, mapDispatchToProps), reduxForm({form: "login"}))(LoginForm)