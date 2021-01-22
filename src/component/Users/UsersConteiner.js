import { followingUserActionCreator, setUsersActionCreator } from "../../state/actionCreator/actionCreator";
import { connect } from "react-redux";
import { Users } from "./Users";
import { User } from "./user/User";

const mapStateToProps = state => {
    return {
        usersList: state.users.listUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setState: (textCheker, usersArray) => {
            dispatch(setUsersActionCreator(textCheker, usersArray));
        },
        getUser: (usersList) => {
            const users = usersList.map((item, index) => {
                return (
                    <User
                        name={item.name}
                        index={index}
                        img={item.photos.large}
                        status={item.status}
                        following={
                            (btn, followCheckerForUser, index) => {
                                dispatch(followingUserActionCreator(btn, followCheckerForUser, index));
                            }
                        }
                    />
                );
            });

            return users;
        }
    }
};

export const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);