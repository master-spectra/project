import { addPostActionCreator, changeInputActionCreator } from "../../../state/actionCreator/actionCreator";
import { connect } from "react-redux";
import { PostForm } from "./postForm";

const mapStateToProps = state => {
    return {
        inputValue: state.profile.inputValue,
        userComment: state.profile.userComment
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeInput: (input, inputValue, changeInputCheckerForProfile) => {
            dispatch(changeInputActionCreator(input, inputValue, changeInputCheckerForProfile));
        },
        addYourMessege: (input, userComment, addPostCheckerForProfile) => {
            dispatch(addPostActionCreator(input, userComment, addPostCheckerForProfile));
        }
    };
};

export const PostFormConteiner = connect(mapStateToProps, mapDispatchToProps)(PostForm);