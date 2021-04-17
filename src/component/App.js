import React, {useEffect, lazy} from "react";
import AppStyle from "./app.module.scss";
import {Route} from "react-router-dom";
import {HeaderConteiner} from "./header/HeaderConteiner";
import {SideBarConteiner} from "./sideBar/SideBarConteiner";
import {MyProfileConteiner} from "./myProfile/MyProfileConteiner";
import LoginConteiner from "./login/LoginConteiner";
import {suspenseCreatConteinerComponent} from "./hoc/hoc";
const MessageConteiner = lazy(() => import("./message/MessegeConteiner"));
const ProfileConteiner = lazy(() => import("./profile/ProfileConteiner"));
const UsersConteiner = lazy(() => import("./users/UsersConteiner"));

export const App = ({isAuth, getMyProfileOnHeader}) => {
    useEffect(() => {
        getMyProfileOnHeader();
    }, []);

    const renderApp = () => {
        if (isAuth) {
            return (
                <div className={AppStyle.appContent}>
                    <Route exact path={"/"} render={() => <MyProfileConteiner/>}/>
                    <Route path="/profile/:userId?" render={suspenseCreatConteinerComponent(ProfileConteiner)}/>
                    <Route path="/message" render={suspenseCreatConteinerComponent(MessageConteiner)}/>
                    <Route path="/find" render={suspenseCreatConteinerComponent(UsersConteiner)}/>
                    <Route path="/login" render={() => <LoginConteiner/>}/>
                </div>
            );
        };

        return <LoginConteiner/>;
    };

    return (
        <div className={AppStyle.app}>
            <HeaderConteiner/>
            <div className={AppStyle.content}>
                <div className={"wrapper"}>
                    <div className={AppStyle.overlay}>
                        <SideBarConteiner/>
                        {renderApp()}
                    </div>
                </div>
            </div>
        </div>
    );
};