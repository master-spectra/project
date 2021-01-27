import React from "react";
import AppStyle from "./app.module.scss";
import { ProfileConteiner } from "./profile/ProfileConteiner";
import {Route} from "react-router-dom";
import {Header} from "./header/Header";
import { UsersConteiner } from "./Users/UsersConteiner";
import { SideBarConteiner } from "./sideBar/SideBarConteiner";
import { MessegeConteiner } from "./messege/MessegeConteiner";

export const App = () => {
    return (
        <div className={AppStyle.app}>
            <Header/>
            <div className={AppStyle.content}>
                <div className={AppStyle.wrapper}>
                    <div className={AppStyle.overlay}>
                        <SideBarConteiner />
                        <div className={AppStyle.appContent}>
                            <Route
                                path="/profile"
                                render={
                                    () => {
                                        return <ProfileConteiner/>;
                                    }
                                }
                            />
                            <Route
                                path="/messege"
                                render={
                                    () => {
                                        return <MessegeConteiner />;
                                    }
                                }
                            />
                            <Route
                                path="/find"
                                render={
                                    () => {
                                        return <UsersConteiner />;
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