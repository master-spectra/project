import React, {Component} from "react";
import AppStyle from "./app.module.scss";
import {Header} from "./header/Header.js";
import {SideBar} from "./sideBar/SideBar";
import {Profile} from "./profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

export const App =  (props) => {
	const {store} = props;

 	return (
		<div className={AppStyle.app} >
			<BrowserRouter>
				<Header />
				<div className={AppStyle.content}>
					<div className="wrapper">
						<div className={AppStyle.overlay}>
							<SideBar sideBar={store.getState().sideBar} />			
							<Route path="/profile" render={() => <Profile store={store} /> } />	
							<Route path="/messege" render={() => console.log(true)} />	
						</div>
					</div>										
				</div>					
			</BrowserRouter>
		</div>
	)
};