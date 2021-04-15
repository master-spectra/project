import {connect} from "react-redux";
import {getMessageListSelect} from "../../utils/reselect/reselect";
import {addPostActionCreator} from "../../state/reducers/profileReducer";
import {Message} from "./Message";

const mapStateToProps = state => {
    return {
        messageList: getMessageListSelect(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addYourMessage: (input, textChecker) => {
            dispatch(addPostActionCreator(input, textChecker));
        }
    };
};

export const MessageConteiner = connect(mapStateToProps, mapDispatchToProps)(Message);