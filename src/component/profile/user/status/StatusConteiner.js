import {connect} from "react-redux";
import {StatusWithHooks} from "./StatusWithHooks";
import {getStatusSelect} from "../../../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {status: getStatusSelect(state)};
};

const mapDispatchToProps = () => {
    return {};
};

export const StatusConteiner = connect(mapStateToProps, mapDispatchToProps)(StatusWithHooks);