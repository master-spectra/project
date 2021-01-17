import React from "react";
import {StoreContext} from "../../storeContext";
import {SideBar} from "./SideBar";

export const SideBarConteiner = (props) => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    return (
                        <SideBar sideBar={store.getState().sideBar}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};