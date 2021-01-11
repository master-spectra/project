import { combineReducers, createStore } from "redux";
import { messegeReducer } from './reducers/messegeReduce';
import { profileReducer } from './reducers/profileReduce';
import { messegeInit, profileInit } from './initReducer';

const reducers = combineReducers({
	profile: profileReducer(profileInit, {}),
	messege: messegeReducer(messegeInit, {}),
});

export const storeRedux = createStore(reducers);