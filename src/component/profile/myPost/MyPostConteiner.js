import React from "react";
import {MyPost} from "./MyPost";
import {StoreContext} from "../../../storeContext";

export const MyPostConteiner = (props) => {
    const {text, likeCounter, index} = props;

    return (
        <StoreContext.Consumer>
            {
                store => {
                    return (
                        <MyPost
                            text={text}
                            likeCounter={likeCounter}
                            index={index}
                            className={store.getState().profile.userComment}
                            dispatch={(action) => store.dispatch(action)}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};