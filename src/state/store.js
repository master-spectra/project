import { combineReducers, createStore } from "redux";
import { messegeReducer } from './reducers/messegeReduce';
import { profileReducer } from './reducers/profileReduce';
import { sideBarReducer } from "./reducers/sideBarReducer";
import { usersReducer } from "./reducers/usersReducer";

const reducers = combineReducers({
	profile: profileReducer,
	messege: messegeReducer,
	sideBar: sideBarReducer,
	users: usersReducer
});

export const store = createStore(reducers);

window.store = store;