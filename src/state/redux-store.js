import { combineReducers, createStore } from "redux";
import { messegeReducer } from './reducers/messegeReduce';
import { profileReducer } from './reducers/profileReduce';
import { sideBarReducer } from "./reducers/sideBarReducer";

const reducers = combineReducers({
	profile: profileReducer,
	messege: messegeReducer,
	sideBar: sideBarReducer
});

export const storeRedux = createStore(reducers);