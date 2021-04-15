import {applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer} from './reducers/messageReducer';
import {profileReducer} from './reducers/profileReducer';
import {sideBarReducer} from "./reducers/sideBarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/authReducer";
import {getMyProfileReducer} from "./reducers/getMyProfileReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    auth: authReducer,
    myProfile: getMyProfileReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;