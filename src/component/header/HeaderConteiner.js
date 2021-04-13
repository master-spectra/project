import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutOnSiteThunkCreator} from "../../state/reducers/authReducer";
import {getIsAuthSelect} from "../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        isAuth: getIsAuthSelect(state)
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