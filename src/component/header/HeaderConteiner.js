import React, {Component} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authActionCreator} from "../../state/actionCreator/actionCreator";
import {getMyProfileOnHeaderThunkCreator} from "../../state/reducers/authReducer";

class HeaderConteinerAPI extends Component {
    componentDidMount = () => {
        const {auth, getMyProfileOnHeader} = this.props;
        getMyProfileOnHeader(auth);
    }

    render = () => {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = state => {
    return {
        profile: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        auth: (data, isAuth) => {
            dispatch(authActionCreator(data, isAuth));
        },
        getMyProfileOnHeader: auth => {
            dispatch(getMyProfileOnHeaderThunkCreator(auth));
        }
    };
};

export const HeaderConteiner = connect(mapStateToProps, mapDispatchToProps)(HeaderConteinerAPI);