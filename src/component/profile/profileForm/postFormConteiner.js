import {addPostActionCreator, changeInputActionCreator} from "../../../state/actionCreator/actionCreator";
import {connect} from "react-redux";
import {PostForm} from "./postForm";

const mapStateToProps = state => {
    return {
        inputValue: state.profile.inputValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeInput: (input, textCheker) => {
            dispatch(changeInputActionCreator(input, textCheker));
        },
        addYourMessege: (input, textCheker) => {
            dispatch(addPostActionCreator(input, textCheker));
        }
    };
};

export const PostFormConteiner = connect(mapStateToProps, mapDispatchToProps)(PostForm);