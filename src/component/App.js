import React, {Component} from "react";
import AppStyle from "./app.module.scss";
import {Header} from "./header/Header";
import {SideBar} from "./sideBar/SideBar";
import {Messege} from "./messege/Messege";
import {Profile} from "./profile/Profile";
import {Route} from "react-router-dom";

export const App =  (props) => {
	const {state, addYourMessege, changeInput} = props;
	
 	return (
		<div className={AppStyle.app} >
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
<<<<<<< HEAD
											addYourMessege={addYourMessege} 
=======
											addPost={addPost} 
>>>>>>> 535bb1536cd541f82940fd83ffa1c569eca372ca
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
<<<<<<< HEAD
											addYourMessege={addYourMessege} 
=======
											addPost={addPost} 
>>>>>>> 535bb1536cd541f82940fd83ffa1c569eca372ca
											changeInput={changeInput} 
										/>
									)
								}
							}
						/>	
					</div>
				</div>										
			</div>					
		</div>
	);
};