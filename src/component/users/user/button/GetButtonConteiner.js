import {connect} from "react-redux";
import {GetButton} from "./GetButton";
import {followingThunkCreator, unFollowingThunkCreator} from "../../../../state/reducers/usersReducer";

const mapStateToProps = state => {
    return {
        isFollow: state.users.isFollow
    };
};

const mapDispatchToProps = dispatch => {
    return {
        following: (btn, id) => {
            dispatch(unFollowingThunkCreator(btn, id));
        },
        unFollowing: (btn, id) => {
            dispatch(followingThunkCreator(btn, id));
        }
    };
};

export const GetButtonConteiner = connect(mapStateToProps, mapDispatchToProps)(GetButton);