import {connect} from "react-redux";
import {PostForm} from "./postForm";
import {getInputValueSelect} from "../../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        inputValue: getInputValueSelect(state)
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const PostFormConteiner = connect(mapStateToProps, mapDispatchToProps)(PostForm);