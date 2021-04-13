import {connect} from "react-redux";
import {LoginForm} from "./LoginForm";
import {getIsAuthSelect} from "../../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        isAuth: getIsAuthSelect(state)
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const LoginConteiner = connect(mapStateToProps, mapDispatchToProps)(LoginForm);