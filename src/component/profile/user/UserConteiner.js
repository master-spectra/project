import { connect } from "react-redux";
import { User } from "./User";

const mapStateToProps = state => {
    return {
        userInfo: state.profile.userInfo
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const UserConteiner = connect(mapStateToProps, mapDispatchToProps)(User);