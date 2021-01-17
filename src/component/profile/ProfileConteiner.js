import React from "react";
import {Profile} from "./Profile";
import {StoreContext} from "../../storeContext";

export const ProfileConteiner = (props) => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    return (
                        <Profile
                            profile={store.getState().profile}
                            dispatch={(action) => store.dispatch(action)}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};