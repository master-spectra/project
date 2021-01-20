import React from "react";
import AppStyle from "./app.module.scss";
import {Header} from "./header/Header";
import {SideBar} from "./sideBar/SideBar";
import {Messege} from "./messege/Messege";
import {Profile} from "./profile/Profile";
import {Route} from "react-router-dom";
import { Users } from "./Users/Users";

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
                            <Route
                                path="/find"
                                render={
                                    () => {
                                        return (
                                            <Users
                                                dispatch={dispatch}
                                                usersList={state.users.listUser}
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