import React, {Component} from "react";
import AppStyle from "./app.module.scss";
import {Route} from "react-router-dom";
import {ProfileConteiner} from "./profile/ProfileConteiner";
import {HeaderConteiner} from "./header/HeaderConteiner";
import {UsersConteiner} from "./users/UsersConteiner";
import {SideBarConteiner} from "./sideBar/SideBarConteiner";
import {MessegeConteiner} from "./messege/MessegeConteiner";
import {MyProfileConteiner} from "./myProfile/MyProfileConteiner";
import {LoginConteiner} from "./login/LoginConteiner";

export class App extends Component {
    componentDidMount = () => {
        const {getMyProfileOnHeader} = this.props;
        getMyProfileOnHeader();
    }

    render = () => {
        const {isAuth} = this.props;

        return (
            <div className={AppStyle.app}>
                <HeaderConteiner />
                <div className={AppStyle.content}>
                    <div className={"wrapper"}>
                        <div className={AppStyle.overlay}>
                            <SideBarConteiner/>
                            {isAuth ? <div className={AppStyle.appContent}>
                                <Route exact path={"/"} render={() => <MyProfileConteiner/>}/>
                                <Route path="/profile/:userId?" render={() => <ProfileConteiner/>}/>
                                <Route path="/messege" render={() => <MessegeConteiner/>}/>
                                <Route path="/find" render={() => <UsersConteiner/>}/>
                                <Route path="/login" render={() => <LoginConteiner/>}/>
                            </div> : <LoginConteiner/>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};