import { connect } from "react-redux";
import { Profile } from "./Profile";
import { likePostActionCreator } from "../../state/actionCreator/actionCreator";

const mapStateToProps = state => {
    return {
        userComment: state.profile.userComment
    };
};

const mapDispatchToProps = dispatch => {
    return {
        likePost: (likeBtn, index) => {
            dispatch(likePostActionCreator(likeBtn, index))
        }
    };
};


export const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile);