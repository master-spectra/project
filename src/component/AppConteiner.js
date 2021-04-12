import {connect} from "react-redux";
import {App} from "./App";
import {getMyProfileOnHeaderThunkCreator} from "../state/reducers/authReducer";
import {getIsAuthSelect} from "../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        isAuth: getIsAuthSelect(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMyProfileOnHeader: () => {
            dispatch(getMyProfileOnHeaderThunkCreator());
        }
    };
};

export const AppConteiner = connect(mapStateToProps, mapDispatchToProps)(App);