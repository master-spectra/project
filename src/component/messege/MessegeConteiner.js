import {Messege} from "./Messege";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../state/actionCreator/actionCreator";
import {getMessegeListSelect} from "../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        messegeList: getMessegeListSelect(state)
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