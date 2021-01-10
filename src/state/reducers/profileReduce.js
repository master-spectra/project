export const profileReduce = (state, action) => {
	const addPostCheckerForProfile 		= "ADD POST";	
	const changeInputCheckerForProfile 	= "CHANGE INPUT PROFILE";
	
	switch (true) {
		case changeInputCheckerForProfile === action.type && action.input.trim().length > 0:
			state.profile.value = action.input;
			
			return state;
			break;
		case action.type === addPostCheckerForProfile && action.input.trim().length > 0: 
			const data = {
				text: action.input
			};

			action.target.push(data);
			state.profile.value = "";
			
			return state;
			break;
	};
};