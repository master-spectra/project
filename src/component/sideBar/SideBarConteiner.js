import { SideBar } from "./SideBar";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        sideBar: state.sideBar
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const SideBarConteiner = connect(mapStateToProps, mapDispatchToProps)(SideBar);