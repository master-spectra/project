import { addPostActionCreator, changeInputActionCreator } from "../../../state/actionCreator/actionCreator";
import { connect } from "react-redux";
import { MessegeForm } from "./messegeForm";

const mapStateToProps = state => {
    return {
        inputValue: state.messege.inputValue
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

export const MessegeFormConteiner = connect(mapStateToProps, mapDispatchToProps)(MessegeForm);