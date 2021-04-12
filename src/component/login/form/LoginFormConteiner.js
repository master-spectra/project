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

export const LoginConteiner = connect(mapStateToProps, mapDispatchToProps)(LoginForm);