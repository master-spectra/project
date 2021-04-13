import {loadingInProgressActionCreator} from "../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import {Loading} from "./Loading";
import {getLoadingSelect} from "../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {loading: getLoadingSelect(state)};
};

const mapDispatchToProps = dispatch => {
    return {
        loadingInProgress: status => dispatch(loadingInProgressActionCreator(status))
    };
};

export const LoadingConteiner = connect(mapStateToProps, mapDispatchToProps)(Loading);

