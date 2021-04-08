import {Messege} from "./Messege";
import {connect} from "react-redux";
import {redirectHOC} from "../hoc/hoc";
import {compose} from "redux";

const mapStateToProps = state => {
    return {
        messegeList: state.messege.messegeList
    };
};

export const MessegeConteiner = compose(connect(mapStateToProps, () => {}), redirectHOC)(Messege);