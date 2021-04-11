const messegeInit = {
	messegeList: [],
	inputValue: ""
};

export const messegeReducer = (state = messegeInit, action) => {
	const addMessegeCheckerForMessegeChecker 	= "ADD MESSEGE";
	const newState 								= {...state};
	
	switch (true) {
		case action.type === addMessegeCheckerForMessegeChecker:
			const userPost = {text: action.value.messegeText};

			newState.messegeList = [...state.messegeList];
			newState.messegeList.push(userPost);
			newState.inputValue = "";

			return newState;
		default:
			return state;
	}
};