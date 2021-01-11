export const profileReducer = (state, action) => {
	const addPostCheckerForProfile 		= "ADD POST";	
	const changeInputCheckerForProfile 	= "CHANGE INPUT PROFILE";
	
	switch (true) {
		case changeInputCheckerForProfile === action.type && action.input.trim().length > 0:
			state.value = action.input;
			
			return state;
			break;
		case action.type === addPostCheckerForProfile && action.input.trim().length > 0: 
			const userPost = {
				comment: action.input
			};
			
			state.userComment.push(userPost);
			state.value = "";
			
			return state;
			break;
	};
};