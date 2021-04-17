import {connect} from "react-redux";
import {User} from "./User";
import {updatePhotosThunkCreator, updateStatusThunkCreator} from "../../../state/reducers/profileReducer";
import {getCurrentProfileSelect, getIsSubmittingSelect} from "../../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        currentProfile: getCurrentProfileSelect(state),
        isSubmitting: getIsSubmittingSelect(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateStatus: status => {
            dispatch(updateStatusThunkCreator(status));
        },
        updatePhotos: photo => {
            dispatch(updatePhotosThunkCreator(photo))
        }
    };
};

export const UserConteiner = connect(mapStateToProps, mapDispatchToProps)(User);