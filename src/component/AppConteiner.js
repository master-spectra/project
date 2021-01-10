import React from "react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";

export const AppConteiner = (props) => {
	const {store} = props;
	
	const addPost = ({}, ref, post, addPostCheckerForProfile) => {
		store.addPostActionCreator({}, ref, post, addPostCheckerForProfile)
	};
	
	const changeInput = ({}, ref, value, changeInputCheckerForProfile) => {
		store.changeInputActionCreator({}, ref, value, changeInputCheckerForProfile);
	};

	return (
		<BrowserRouter>
			<App 
				state={store.getState()} 
				addPost={addPost} 
				changeInput={changeInput} 
			/>
		</BrowserRouter>
	)
};