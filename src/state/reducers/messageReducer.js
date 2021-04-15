import {sendMessage} from "./profileReducer";

const addMessageCheckerFormessage = "message/ADD MESSAGE";

const messageInit = {
	userComment: [],
	inputValue: ""
};

export const messageReducer = (state = messageInit, action) => {
	const newState = {...state};

	switch (true) {
		case action.type === addMessageCheckerFormessage:
			const userPost = {text: action.value.messageText};
			sendMessage(newState, state, userPost);

			return newState;
		default: return state;
	}
};