const profileInit = {
	userInfo: [
		"Andrey Omelchenko",
		"Age: unknow",
		"Home animal: unknow",
		"City: unknow"
	],
	userComment: [],
	inputValue: ""
};

export const profileReducer = (state = profileInit, action) => {
	const addPostCheckerForProfile 		= "ADD POST";	
	const changeInputCheckerForProfile 	= "CHANGE INPUT PROFILE";
	const likePostChecker				= "LIKE POST";
	
	switch (true) {
		case changeInputCheckerForProfile === action.type:
			state.inputValue = action.input;
			
			return state;
		case action.type === addPostCheckerForProfile && action.input.trim().length > 0: 
			const userPost = {
				comment: action.input,
				likeCounter: 0,
				status: "far"
			};
			
			state.userComment.push(userPost);
			state.inputValue = "";
			
			return state;
		case action.type === likePostChecker:
			switch(true) {
				case state.userComment[action.index].status === "far":				
					state.userComment[action.index].status = "fas active";
					++state.userComment[action.index].likeCounter;

					break;
				default:
					state.userComment[action.index].status = "far";
					--state.userComment[action.index].likeCounter;

					break;
			};

			return state;
		default:
			return state;
	};
};
