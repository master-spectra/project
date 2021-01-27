import {connect} from "react-redux";
import {User} from "./User";

const mapStateToProps = state => {
    return {
        currentProfile: state.profile.currentProfile
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const UserConteiner = connect(mapStateToProps, mapDispatchToProps)(User);