import {loadingInProgressActionCreator} from "../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import {Loading} from "./Loading";

const mapStateToProps = state => {
    return {loading: state.loading.loading};
};

const mapDispatchToProps = dispatch => {
    return {
        loadingInProgress: status => dispatch(loadingInProgressActionCreator(status))
    };
};

export const LoadingConteiner = connect(mapStateToProps, mapDispatchToProps)(Loading);

