import UserStyle from "./user.module.scss";
import { connect } from "react-redux";
import { User } from "./User";

const mapStateToProps = state => {
    return {
        userInfo: state.profile.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getInfo: (userInfo) => {
            const userInfoData = userInfo.map(item => {
                return <p className={UserStyle.userInfo}>{item}</p>
            });

            return userInfoData;
        }
    };
};

export const UserConteiner = connect(mapStateToProps, mapDispatchToProps)(User);