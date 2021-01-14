export const profileReducer = (state, action) => {	
	const addPostCheckerForProfile 		= "ADD POST";	
	const changeInputCheckerForProfile 	= "CHANGE INPUT PROFILE";
	const likePostChecker				= "LIKE POST";
	
	switch (true) {
		case changeInputCheckerForProfile === action.type && action.input.trim().length > 0:
			state.value = action.input;
			
			return state;
		case action.type === addPostCheckerForProfile && action.input.trim().length > 0: 
			const userPost = {
				comment: action.input,
				likeCounter: 0,
				status: "far"
			};
			
			state.userComment.push(userPost);
			state.value = "";
			
			return state;
		case action.type === likePostChecker: 			
			switch(true) {
				case state.userComment[action.index].status === "far":				
					state.userComment[action.index].status 	= "fas active";
					++state.userComment[action.index].likeCounter;

					break;
				case state.userComment[action.index].status === "fas active":  				
					state.userComment[action.index].status 	= "far";
					--state.userComment[action.index].likeCounter;

					break;
			};

			return state;
		default:
			return state;
	};
};
