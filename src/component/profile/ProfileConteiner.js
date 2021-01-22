import { MyPost } from "./myPost/MyPost";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { likePostActionCreator } from "../../state/actionCreator/actionCreator";

const mapStateToProps = state => {
    return {
        userComment: state.profile.userComment
    }
};

const mapDispatchToProps = dispatch => {
    return {
        allPostUser: (userComment = []) => {
            const allPostUser = userComment.map((item, index) => {
                return (
                    <MyPost
                        likeCounter={item.likeCounter}
                        text={item.comment}
                        className={userComment}
                        index={index}
                        likePost={
                            (likeBtn, likePostTextChacker, index) => {
                                dispatch(likePostActionCreator(likeBtn, likePostTextChacker, index))
                            }
                        }
                    />
                )
            });

            return allPostUser;
        }
    };
};


export const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile);