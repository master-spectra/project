import {getProfile, getStatus, updateStatus} from "../../api/api";
import {
	setProfileActionCreator, setStatusActionCreator,
} from "../actionCreator/actionCreator";

const profileInit = {
	userComment: [],
	inputValue: "",
	currentProfile: null,
	status: ""
};

export const profileReducer = (state = profileInit, action) => {
	const addPostCheckerForProfileChecker 		= "ADD POST";
	const changeInputCheckerForProfileChecker 	= "CHANGE INPUT PROFILE";
	const likePostChecker						= "LIKE POST";
	const setProfileChecker						= "SET PROFILE";
	const setStatusChecker 						= "SET STATUS";
	const newState 								= {...state};

	switch (true) {
		case changeInputCheckerForProfileChecker === action.type:
			newState.inputValue = action.input;
			return newState;
		case action.type === addPostCheckerForProfileChecker:
			const userPost = {
				comment: action.value.postText,
				likeCounter: 0,
				status: "far"
			};

			newState.userComment = [...state.userComment];
			newState.userComment.push(userPost);
			newState.inputValue = "";

			return newState;
		case action.type === likePostChecker:
			newState.userComment = [...state.userComment];

			switch (true) {
				case newState.userComment[action.index].status === "far":
					newState.userComment[action.index].status = "fas active";
					++newState.userComment[action.index].likeCounter;

					break;
				default:
					newState.userComment[action.index].status = "far";
					--newState.userComment[action.index].likeCounter;

					break;
			}
			return newState;
		case setProfileChecker === action.type:
			newState.currentProfile = {...action.profile};
			return newState;
		case setStatusChecker === action.type:
			newState.status = action.status;
			return newState;
		default:
			return state;
	}
};

export const profileThunkCreator = id => {
	return dispatch => {
		getProfile(id)
			.then(data => {
				dispatch(setProfileActionCreator(data));
			});
	};
};

export const getStatusThunkCreator = userId => {
	return dispatch => {
		getStatus(userId)
			.then(response => {
				dispatch(setStatusActionCreator(response.data));
			});
	};
};

export const updateStatusThunkCreator = status => {
	return dispatch => {
		updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatusActionCreator(status));
				};
			});
	};
};