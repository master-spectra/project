import {connect} from "react-redux";
import {MessegeForm} from "./messegeForm";

const mapStateToProps = state => {
    return {
        inputValue: state.messege.inputValue
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const MessegeFormConteiner = connect(mapStateToProps, mapDispatchToProps)(MessegeForm);