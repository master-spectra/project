import React from "react";
import AppStyle from "./app.module.scss";
import {Header} from "./header/Header";
import {SideBar} from "./sideBar/SideBar";
import {Messege} from "./messege/Messege";
import {Profile} from "./profile/Profile";
import {Route} from "react-router-dom";

export const App = (props) => {
    const {state, dispatch} = props;

    return (
        <div className={AppStyle.app}>
            <Header/>
            <div className={AppStyle.content}>
                <div className="wrapper">
                    <div className={AppStyle.overlay}>
                        <SideBar sideBar={state.sideBar}/>
                        <div className={AppStyle.appContent}>
                            <Route
                                path="/profile"
                                render={
                                    () => {
                                        return (
                                            <Profile
                                                profile={state.profile}
                                                className={state.profile.userComment}
                                                dispatch={dispatch}
                                            />
                                        )
                                    }
                                }
                            />
                            <Route
                                path="/messege"
                                render={
                                    () => {
                                        return (
                                            <Messege
                                                messege={state.messege}
                                                dispatch={dispatch}
                                            />
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