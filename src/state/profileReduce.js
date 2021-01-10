export const profileReduce = (state, action) => {
	const addPostChecker 		= "ADD POST";	
	const changeInputChecker 	= "CHANGE INPUT PROFILE";
	
	if (action.type === changeInputChecker && action.input.trim().length > 0) {
		state.profile.value = action.input;
		return state;
	} else if (action.type === addPostChecker && action.input.trim().length > 0) {
		const data = {
			text: action.input
		};

		action.target.push(data);
		
		state.profile.value = "";
		return state;
	};
};