import {combineReducers, createStore} from "redux";
import {messegeReducer} from './reducers/messegeReducer';
import {profileReducer} from './reducers/profileReducer';
import {sideBarReducer} from "./reducers/sideBarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/authReducer";
import {getMyProfileReducer} from "./reducers/getMyProfileReducer";

const reducers = combineReducers({
    profile: profileReducer,
    messege: messegeReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    auth: authReducer,
    myProfile: getMyProfileReducer
});

export const store = createStore(reducers);

window.store = store;