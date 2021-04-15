import {connect} from "react-redux";
import {GetButton} from "./GetButton";
import {followingThunkCreator, unFollowingThunkCreator} from "../../../../state/reducers/usersReducer";
import {getIsFollowSelect} from "../../../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        isFollow: getIsFollowSelect(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        following: id => {
            dispatch(followingThunkCreator(id));
        },
        unFollowing: id => {
            dispatch(unFollowingThunkCreator(id));
        }
    };
};

export const GetButtonConteiner = connect(mapStateToProps, mapDispatchToProps)(GetButton);