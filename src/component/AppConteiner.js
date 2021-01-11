import React from "react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";

export const AppConteiner = (props) => {
	const {store} = props;
	
	const addYourMessege = ({}, ref, post, addPostCheckerForProfile) => {
		store.addPostActionCreator({}, ref, post, addPostCheckerForProfile)
	};
	
	const changeInput = ({}, ref, value, changeInputCheckerForProfile) => {
		store.changeInputActionCreator({}, ref, value, changeInputCheckerForProfile);
	};

	return (
		<BrowserRouter>
			<App 
				state={store.getState()} 
<<<<<<< HEAD
				addYourMessege={addYourMessege} 
				changeInput={changeInput} 
			/>
		</BrowserRouter>
	);
=======
				addPost={addPost} 
				changeInput={changeInput} 
			/>
		</BrowserRouter>
	)
>>>>>>> 535bb1536cd541f82940fd83ffa1c569eca372ca
};