import {connect} from "react-redux";
import {getmessageListSelect} from "../../utils/reselect/reselect";
import {addPostActionCreator} from "../../state/reducers/profileReducer";
import {Message} from "./Message";

const mapStateToProps = state => {
    return {
        messageList: getmessageListSelect(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addYourmessage: (input, textChecker) => {
            dispatch(addPostActionCreator(input, textChecker));
        }
    };
};

export const MessageConteiner = connect(mapStateToProps, mapDispatchToProps)(Message);