import {getProfileOnHeader} from "../../api/api";
import {setProfileActionCreator} from "./profileReducer";

const getProfile = "profile/SET PROFILE";
const myProfileInit = {profile: null};

export const getMyProfileReducer = (state = myProfileInit, action) =>{
    const newState = {...state};

    switch (true) {
        case getProfile === action.type:
            newState.profile = action.profile;
            return newState;
        default: return state;
    }
};


export const getMyProfileThunkCreator = () => async dispatch => {
    const response = await getProfileOnHeader();

    if (response.data.resultCode === 0) {
        dispatch(setProfileActionCreator(response.data.data));
    };
};