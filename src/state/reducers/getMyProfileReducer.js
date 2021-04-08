import {getProfileOnHeader} from "../../api/api";
import {setProfileActionCreator} from "../actionCreator/actionCreator";

const myProfileInit = {profile: null};

export const getMyProfileReducer = (state = myProfileInit, action) =>{
    const newState = {...state};
    const getProfile = "SET PROFILE";

    switch (true) {
        case getProfile === action.type:
            newState.profile = action.profile;
            return newState;
        default:
            return state;
    }
};

export const getMyProfileThunkCreator = () => {
    return dispatch => {
        getProfileOnHeader()
            .then(data => {
                dispatch(setProfileActionCreator(data.data));
            });
    };
};