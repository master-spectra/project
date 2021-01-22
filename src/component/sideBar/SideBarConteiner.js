import { Link } from "./link/Link";
import { SideBar } from "./SideBar";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        sideBar: state.sideBar
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLink: (sideBar)  => {
            const link = sideBar.map(item => <Link link={item.link} text={item.nameLink}/>)

            return link;
        }
    };
};

export const SideBarConteiner = connect(mapStateToProps, mapDispatchToProps)(SideBar);