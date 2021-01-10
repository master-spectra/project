export const messegeReduce = (state, action) => {
	const addMessegeChecker 	= "ADD MESSEGE";	
	const changeInputChecker 	= "CHANGE INPUT MESSEGE";
	
	if (action.type === changeInputChecker && action.input.trim().length > 0) {
		state.messege.value = action.input;
		return state;
	} else if (action.type === addMessegeChecker && action.input.trim().length > 0) {
		const data = {
			text: action.input
		};

		action.target.push(data);
		
		state.messege.value = "";
		return state;
	};
};