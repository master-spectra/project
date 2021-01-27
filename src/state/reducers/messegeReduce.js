const messegeInit = {
	messegeList: [],
	inputValue: ""
};

export const messegeReducer = (state = messegeInit, action) => {
	const addMessegeCheckerForMessegeChecker 	= "ADD MESSEGE";
	const changeInputCheckerForMessegeChecker 	= "CHANGE INPUT MESSEGE";
	const newState 								= {...state};
	
	switch (true) {
		case action.type === changeInputCheckerForMessegeChecker && action.input.trim().length > 0:
			newState.inputValue = action.input;

			return newState;
		case action.type === addMessegeCheckerForMessegeChecker && action.input.trim().length > 0:
			const userPost = {text: action.input};

			newState.messegeList = [...state.messegeList];
			newState.messegeList.push(userPost);
			newState.inputValue = "";

			return newState;
		default:
			return state;
	}
};