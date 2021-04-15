import React, {useEffect} from "react";
import AppStyle from "./app.module.scss";
import {Route} from "react-router-dom";
import {ProfileConteiner} from "./profile/ProfileConteiner";
import {HeaderConteiner} from "./header/HeaderConteiner";
import {UsersConteiner} from "./users/UsersConteiner";
import {SideBarConteiner} from "./sideBar/SideBarConteiner";
import {MessageConteiner} from "./message/MessegeConteiner";
import {MyProfileConteiner} from "./myProfile/MyProfileConteiner";
import {LoginConteiner} from "./login/LoginConteiner";

export const App = ({isAuth, getMyProfileOnHeader}) => {
    useEffect(() => {
        getMyProfileOnHeader();
    });

    const renderApp = () => {
        if (isAuth) {
            return (
                <div className={AppStyle.appContent}>
                    <Route exact path={"/"} render={() => <MyProfileConteiner/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileConteiner/>}/>
                    <Route path="/message" render={() => <MessageConteiner/>}/>
                    <Route path="/find" render={() => <UsersConteiner/>}/>
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