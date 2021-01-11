import React from "react";
import {createStore, combineReducers} from "redux";
import {profileReduce} from "./reducers/profileReduce";
import {messegeReduce} from "./reducers/messegeReduce";

console.log(profileReduce);

const reducers = combineReducers({
	profile: profileReduce,
	messege: messegeReduce
});

export const storeRedux = createStore(reducers);