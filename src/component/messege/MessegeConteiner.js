import {Messege} from "./Messege";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../state/actionCreator/actionCreator";

const mapStateToProps = state => {
    return {
        messegeList: state.messege.messegeList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addYourMessege: (input, textChecker) => {
            dispatch(addPostActionCreator(input, textChecker));
        }
    };
};

export const MessegeConteiner = connect(mapStateToProps, mapDispatchToProps)(Messege);