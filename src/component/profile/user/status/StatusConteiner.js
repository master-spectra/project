import {connect} from "react-redux";
import {Status} from "./Status";

const mapStateToProps = state => {
    return {status: state.profile.status};
};

const mapDispatchToProps = () => {
    return {};
};

export const StatusConteiner = connect(mapStateToProps, mapDispatchToProps)(Status);