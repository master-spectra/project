import {Messege} from "./Messege";
import {connect} from "react-redux";
import {redirectHOC} from "../hoc/hoc";
import {compose} from "redux";
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

export const MessegeConteiner = compose(connect(mapStateToProps, mapDispatchToProps), redirectHOC)(Messege);