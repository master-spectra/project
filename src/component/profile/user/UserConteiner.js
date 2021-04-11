import {connect} from "react-redux";
import {User} from "./User";
import {updateStatusThunkCreator} from "../../../state/reducers/profileReducer";

const mapStateToProps = state => {
    return {
        currentProfile: state.profile.currentProfile,
        isSubmitting: state.auth.isSubmitting
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateStatus: status => {
            dispatch(updateStatusThunkCreator(status));
        }
    };
};

export const UserConteiner = connect(mapStateToProps, mapDispatchToProps)(User);