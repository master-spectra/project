import React, {Component} from "react";
import * as axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authActionCreator, fetchingActionCreator} from "../../state/actionCreator/actionCreator";

class HeaderConteinerAPI extends Component {
    componentDidMount = () => {
        const {auth, fetching} = this.props;

        fetching(true);

        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    auth(response.data.data, true);
                } else {
                    auth({}, false);
                };

                fetching(false);
            });
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
        fetching: isFetching => {
            dispatch(fetchingActionCreator(isFetching));
        }
    };
};

export const HeaderConteiner = connect(mapStateToProps, mapDispatchToProps)(HeaderConteinerAPI);