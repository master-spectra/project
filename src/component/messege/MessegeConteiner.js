import {Messege} from "./Messege";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        messegeList: state.messege.messegeList
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const MessegeConteiner = connect(mapStateToProps, mapDispatchToProps)(Messege);