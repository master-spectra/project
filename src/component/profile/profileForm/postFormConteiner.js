import {connect} from "react-redux";
import {PostForm} from "./postForm";

const mapStateToProps = state => {
    return {
        inputValue: state.profile.inputValue
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const PostFormConteiner = connect(mapStateToProps, mapDispatchToProps)(PostForm);