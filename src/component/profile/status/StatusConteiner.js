import {connect} from "react-redux";
import {Status} from "./Status";
import {updateStatusThunkCreator} from "../../../state/reducers/profileReducer";

const mapStateToProps = state => {
    return {status: state.profile.status};
};

const mapDispatchToProps = dispatch => {
    return {
        updateStatus: status => {
            dispatch(updateStatusThunkCreator(status));
        }
    };
};

export const StatusConteiner = connect(mapStateToProps, mapDispatchToProps)(Status);