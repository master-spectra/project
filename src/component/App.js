import React from "react";
import AppStyle from "./app.module.scss";
import {Route} from "react-router-dom";
import {ProfileConteiner} from "./profile/ProfileConteiner";
import {HeaderConteiner} from "./header/HeaderConteiner";
import {UsersConteiner} from "./users/UsersConteiner";
import {SideBarConteiner} from "./sideBar/SideBarConteiner";
import {MessegeConteiner} from "./messege/MessegeConteiner";
import {MyProfileConteiner} from "./myProfile/MyProfileConteiner";
import {LoginConteinerAPI} from "./login/loginConteiner";

export const App = props => {
    const onSubmit = formData => {
        const {loginOnSite} = props;
        loginOnSite(formData);
    };

    return (
        <div className={AppStyle.app}>
            <HeaderConteiner />
            <div className={AppStyle.content}>
                <div className={"wrapper"}>
                    <div className={AppStyle.overlay}>
                        <SideBarConteiner/>
                        <div className={AppStyle.appContent}>
                            <Route exact path={"/"} render={() => <MyProfileConteiner/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileConteiner/>}/>
                            <Route path="/messege" render={() => <MessegeConteiner/>}/>
                            <Route path="/find" render={() => <UsersConteiner/>}/>
                            <Route path="/login" render={() => <LoginConteinerAPI onSubmit={(formData) => onSubmit(formData)}/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};