import {connect} from "react-redux";
import {MessageForm} from "./MessageForm";
import {getmessageInputValueSelect} from "../../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        inputValue: getmessageInputValueSelect(state)
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const MessageFormConteiner = connect(mapStateToProps, mapDispatchToProps)(MessageForm);