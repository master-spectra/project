import React from "react";
import AppStyle from "./app.module.scss";
import {Header} from "./header/Header";
import {Messege} from "./messege/Messege";
import {ProfileConteiner} from "./profile/ProfileConteiner";
import {StoreContext} from "../storeContext";
import {SideBarConteiner} from "./sideBar/sideBarConteiner";
import {Route} from "react-router-dom";

export const App = () => {
    return (
        <div className={AppStyle.app}>
            <Header/>
            <div className={AppStyle.content}>
                <div className="wrapper">
                    <div className={AppStyle.overlay}>
                        <SideBarConteiner/>
                        <div className={AppStyle.appContent}>
                            <Route
                                path="/profile"
                                render={
                                    () => {
                                        return (
                                            <StoreContext.Consumer>
                                                {
                                                    store => {
                                                        return (
                                                            <ProfileConteiner
                                                                profile={
                                                                    store.getState().profile
                                                                }
                                                                dispatch={(action) => {
                                                                    store.dispatch(action)
                                                                }}
                                                            />
                                                        )
                                                    }
                                                }
                                            </StoreContext.Consumer>
                                        )
                                    }
                                }
                            />
                            <Route
                                path="/messege"
                                render={
                                    () => {
                                        return (
                                            <StoreContext.Consumer>
                                                {
                                                    store => {
                                                        return (
                                                            <Messege
                                                                messege={
                                                                    store.getState().messege
                                                                }
                                                                dispatch={(action) => {
                                                                    store.dispatch(action)
                                                                }}
                                                            />
                                                        )
                                                    }
                                                }
                                            </StoreContext.Consumer>
                                        )
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};