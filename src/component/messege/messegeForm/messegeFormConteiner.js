import {connect} from "react-redux";
import {MessegeForm} from "./messegeForm";
import {getMessegeInputValueSelect} from "../../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        inputValue: getMessegeInputValueSelect(state)
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const MessegeFormConteiner = connect(mapStateToProps, mapDispatchToProps)(MessegeForm);