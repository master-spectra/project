import React from "react";
import AppStyle from "./app.module.scss";
import {Header} from "./header/Header";
import { UsersConteiner } from "./Users/UsersConteiner";
import { ProfileConteiner } from "./profile/ProfileConteiner";
import { MessegeConteiner } from "./messege/MessegeConteiner";
import { SideBarConteiner } from "./sideBar/SideBarConteiner";
import {Route} from "react-router-dom";

export const App = (props) => {
    const {state, dispatch} = props;

    return (
        <div className={AppStyle.app}>
            <Header/>
            <div className={AppStyle.content}>
                <div className="wrapper">
                    <div className={AppStyle.overlay}>
                        <SideBarConteiner />
                        <div className={AppStyle.appContent}>
                            <Route
                                path="/profile"
                                render={
                                    () => {
                                        return (
                                            <ProfileConteiner/>
                                        )
                                    }
                                }
                            />
                            <Route
                                path="/messege"
                                render={
                                    () => {
                                        return (
                                            <MessegeConteiner />
                                        )
                                    }
                                }
                            />
                            <Route
                                path="/find"
                                render={
                                    () => {
                                        return (
                                            <UsersConteiner />
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