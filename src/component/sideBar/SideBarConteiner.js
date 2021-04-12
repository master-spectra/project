import {SideBar} from "./SideBar";
import {connect} from "react-redux";
import {getSideBarSelect} from "../../utils/reselect/reselect";

const mapStateToProps = state => {
    return {
        sideBar: getSideBarSelect(state)
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const SideBarConteiner = connect(mapStateToProps, mapDispatchToProps)(SideBar);