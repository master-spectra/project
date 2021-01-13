import React from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

export const AppConteiner = (props) => {
	const {store} = props;
	
	const addYourMessege = ({}, ref, post, addPostCheckerForProfile) => {
		store.addPostActionCreator({}, ref, post, addPostCheckerForProfile)
	};
	
	const changeInput = ({}, ref, value, changeInputCheckerForProfile) => {
		store.changeInputActionCreator({}, ref, value, changeInputCheckerForProfile);
	};

	const likePost = ({}, post, likeBtn, likePostTextChacker, index) => {
		store.likePostActionCreator({}, post, likeBtn, likePostTextChacker, index);
	};

	return (
		<BrowserRouter>
			<App 
				state={store.getState()} 
				addYourMessege={addYourMessege} 
				changeInput={changeInput} 
				likePost={likePost}
			/>
		</BrowserRouter>
	)
};