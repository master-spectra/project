import { addPostActionCreator, changeInputActionCreator } from "../../../state/actionCreator/actionCreator";
import { connect } from "react-redux";
import { MessegeForm } from "./messegeForm";

const mapStateToProps = state => {
    return {
        inputValue: state.messege.inputValue,
        messegeList: state.messege.messegeList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeInput: (input, inputValue, changeInputCheckerForMessege) => {
            dispatch(changeInputActionCreator(input, inputValue, changeInputCheckerForMessege));
        },
        addYourMessege: (input, userComment, addPostCheckerForMessege) => {
            dispatch(addPostActionCreator(input, userComment, addPostCheckerForMessege));
        }
    };
};

export const MessegeFormConteiner = connect(mapStateToProps, mapDispatchToProps)(MessegeForm);