import React, {Component} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getMyProfileOnHeaderThunkCreator} from "../../state/reducers/authReducer";

class HeaderConteinerAPI extends Component {
    componentDidMount = () => {
        const {getMyProfileOnHeader} = this.props;
        getMyProfileOnHeader();
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
        getMyProfileOnHeader: () => {
            dispatch(getMyProfileOnHeaderThunkCreator());
        }
    };
};

export const HeaderConteiner = connect(mapStateToProps, mapDispatchToProps)(HeaderConteinerAPI);