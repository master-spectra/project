import {connect} from "react-redux";
import {MessageForm} from "./MessageForm";
import {getMessageInputValueSelect} from "../../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        inputValue: getMessageInputValueSelect(state)
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const MessageFormConteiner = connect(mapStateToProps, mapDispatchToProps)(MessageForm);