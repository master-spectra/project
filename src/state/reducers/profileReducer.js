import {getProfile, getStatus, updateStatus} from "../../api/api";

const addPostCheckerForProfile 		= "profile/ADD POST";
const setProfile					= "profile/SET PROFILE";
const setStatus 					= "profile/SET STATUS";

const profileInit = {
	userComment: [],
	inputValue: "",
	currentProfile: null,
	status: ""
};

export const sendMessage = (newState, state, userPost) => {
	newState.userComment = [...state.userComment];
	newState.userComment.push(userPost);
	newState.inputValue = "";
};

export const profileReducer = (state = profileInit, action) => {
	const newState 	= {...state};

	switch (true) {
		case action.type === addPostCheckerForProfile:
			const userPost = {comment: action.value.postText};
			sendMessage(newState, state, userPost);

			return newState;
		case setProfile === action.type:
			newState.currentProfile = {...action.profile};
			return newState;
		case setStatus === action.type:
			newState.status = action.status;
			return newState;
		default: return state;
	}
};

const setStatusActionCreator = status => {
	return {type: setStatus, status: status};
};

export const addPostActionCreator = (value, type) => {
	return {type: type, value: value};
};

export const setProfileActionCreator = profile => {
	return {type: setProfile, profile: {...profile}};
};

const profileUniThunkCreator = (actionCreator, id, DALFunction) => async dispatch => {
	const response = await DALFunction(id);
	dispatch(actionCreator(response.data));
};

export const profileThunkCreator = id => profileUniThunkCreator(setProfileActionCreator, id, getProfile);

export const getStatusThunkCreator = userId => profileUniThunkCreator(setStatusActionCreator, userId, getStatus);

export const updateStatusThunkCreator = status => async dispatch => {
	const response = await updateStatus(status);

	if (response.data.resultCode === 0) {
		dispatch(setStatusActionCreator(status));
	};
};