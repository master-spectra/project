import {applyMiddleware, combineReducers, createStore} from "redux";
import {messegeReducer} from './reducers/messegeReducer';
import {profileReducer} from './reducers/profileReducer';
import {sideBarReducer} from "./reducers/sideBarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/authReducer";
import {getMyProfileReducer} from "./reducers/getMyProfileReducer";
import {loaingReducer} from "./reducers/loadingReducer";
import thunkMiddleware from "redux-thunk";
import {statusCodeReducer} from "./reducers/statusCodeReducer";

const reducers = combineReducers({
    profile: profileReducer,
    messege: messegeReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    auth: authReducer,
    myProfile: getMyProfileReducer,
    loading: loaingReducer,
    statusCode: statusCodeReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;