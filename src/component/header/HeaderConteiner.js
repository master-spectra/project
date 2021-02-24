import React, {Component} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authActionCreator, fetchingActionCreator} from "../../state/actionCreator/actionCreator";
import {getProfileOnHeader} from "../../api/api";

class HeaderConteinerAPI extends Component {
    componentDidMount = () => {
        const {auth, fetching} = this.props;

        fetching(true);
        getProfileOnHeader()
            .then(data => {
                if (data.resultCode === 0) {
                    auth(data.data, true);
                } else {
                    auth({}, false);
                };

                fetching(false);
            });;
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