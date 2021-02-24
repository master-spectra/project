import React from "react";
import AppStyle from "./app.module.scss";
import {Route} from "react-router-dom";
import {ProfileConteiner} from "./profile/ProfileConteiner";
import {HeaderConteiner} from "./header/HeaderConteiner";
import {UsersConteiner} from "./users/UsersConteiner";
import {SideBarConteiner} from "./sideBar/SideBarConteiner";
import {MessegeConteiner} from "./messege/MessegeConteiner";
import {MyProfileConteiner} from "./myProfile/MyProfileConteiner";

export const App = () => {
    return (
        <div className={AppStyle.app}>
            <HeaderConteiner />
            <div className={AppStyle.content}>
                <div className={"wrapper"}>
                    <div className={AppStyle.overlay}>
                        <SideBarConteiner/>
                        <div className={AppStyle.appContent}>
                            <Route exact path={"/"} render={() => <MyProfileConteiner/>}/>
                            <Route
                                path="/profile/:userId?"
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
                                        return <MessegeConteiner/>;
                                    }
                                }
                            />
                            <Route
                                path="/find"
                                render={
                                    () => {
                                        return <UsersConteiner/>;
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