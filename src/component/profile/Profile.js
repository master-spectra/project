import React from "react";
import ProfileStyle from "./profile.module.scss";
import {Info} from "./info/Info";
import {MyPostConteiner} from "./myPost/MyPostConteiner";
import {addPostActionCreator, changeInputActionCreator} from "../../state/store";
import {StoreContext} from "../../storeContext";

export const Profile = (props) => {
    const {profile, dispatch}           = props;
    const input                         = React.createRef();
    const changeInputCheckerForProfile  = "CHANGE INPUT PROFILE";
    const addPostCheckerForProfile      = "ADD POST";

    const userInfo = profile.userInfo.map(item => {
        return <Info text={item}/>
    });

    const allPostUser = profile.userComment.map((item, index) => {
        return (
            <StoreContext.Consumer>
                {
                    store => {
                        return (
                            <MyPostConteiner
                                text={item.comment}
                                likeCounter={item.likeCounter}
                                index={index}
                            />
                        )
                    }
                }
            </StoreContext.Consumer>
        )
    });

    const callChangeInput = () => {
        dispatch(
            changeInputActionCreator(
                input,
                profile.inputValue,
                changeInputCheckerForProfile
            )
        );
    };

    const callAddYourMessege = () => {
        dispatch(
            addPostActionCreator(
                input,
                profile.userComment,
                addPostCheckerForProfile
            )
        );
    };

    return (
        <div className={ProfileStyle.profile}>
            <div className={ProfileStyle.backgroundImage}></div>
            <div className={ProfileStyle.user}>
                <div className={ProfileStyle.imgUser}></div>
                <div className={ProfileStyle.userInfoWrap}>
                    {userInfo}
                </div>
            </div>
            <form action="#" className={ProfileStyle.formSendPost}>
                <h3 className={ProfileStyle.formTitle}>
                    My Post
                </h3>
                <input
                    type="text"
                    value={profile.inputValue}
                    ref={input}
                    className={ProfileStyle.formInput}
                    onChange={callChangeInput}
                />
                <input
                    type="button"
                    className={ProfileStyle.formBtn}
                    value="Send"
                    onClick={callAddYourMessege}
                />
            </form>
            {allPostUser}
        </div>
    );
};