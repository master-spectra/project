import { combineReducers, createStore } from "redux";
import { messegeReducer } from './reducers/messegeReduce';
import { profileReducer } from './reducers/profileReduce';

const reducers = combineReducers({
	profile: profileReducer,
	messege: messegeReducer,
});

export const storeRedux = createStore(reducers);