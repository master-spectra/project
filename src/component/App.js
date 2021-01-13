import React from "react";
import AppStyle   from "./app.module.scss";
import { Header } from "./header/Header";
import { SideBar } from "./sideBar/SideBar";
import { Messege } from "./messege/Messege";
import { Profile } from "./profile/Profile";
import { Route } from "react-router-dom";

export const App =  (props) => {
	const {state, addYourMessege, changeInput, likePost, className} = props;
	
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
											addYourMessege={addYourMessege} 
											changeInput={changeInput} 
											likePost={likePost}
											className={className}
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
											addYourMessege={addYourMessege} 
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