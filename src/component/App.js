import React, {Component} from "react";
import AppStyle from "./app.module.scss";
import {Header} from "./header/Header.js";
import {SideBar} from "./sideBar/SideBar";
import {Messege} from "./messege/Messege";
import {Profile} from "./profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

export const App =  (props) => {
	const {state, addPost, changeInput} = props;

 	return (
		<div className={AppStyle.app} >
			<BrowserRouter>
				<Header />
				<div className={AppStyle.content}>
					<div className="wrapper">
						<div className={AppStyle.overlay}>
							<SideBar sideBar={state.sideBar} />			
							<Route 
								path="/profile" 
								render={
									() => {
										return (
											<Profile 
												profile={state.profile} 
												addPost={addPost} 
												changeInput={changeInput} 
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
												addPost={addPost} 
												changeInput={changeInput} 
											/>
										)
									}
								}
							/>	
						</div>
					</div>										
				</div>					
			</BrowserRouter>
		</div>
	)
};