const messegeInit = {
	messegeList: [],
	inputValue: ""
};

export const messegeReducer = (state = messegeInit, action) => {
	const addMessegeCheckerForMessegeChecker 	= "ADD MESSEGE";
	const changeInputCheckerForMessegeChecker 	= "CHANGE INPUT MESSEGE";
	
	switch (true) {
		case action.type === changeInputCheckerForMessegeChecker && action.input.trim().length > 0: {
			const newState = {...state};
			newState.inputValue = action.input;

			return newState;
		}

		case action.type === addMessegeCheckerForMessegeChecker && action.input.trim().length > 0:
			const userPost = {text: action.input};
			const newState = {...state};
			newState.messegeList = [...state.messegeList];

			newState.messegeList.push(userPost);
			newState.inputValue = "";

			return newState;

		default:
			return state;
	}
};