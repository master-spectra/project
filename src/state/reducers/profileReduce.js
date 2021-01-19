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
		case changeInputCheckerForProfile === action.type: {
			const newState = {...state};
			newState.inputValue = action.input;

			return newState;
		}
		case action.type === addPostCheckerForProfile && action.input.trim().length > 0: {
			const userPost = {
				comment: action.input,
				likeCounter: 0,
				status: "far"
			};

			const newState = {...state};
			newState.userComment = [...state.userComment];

			newState.userComment.push(userPost);
			newState.inputValue = "";

			return newState;
		}
		case action.type === likePostChecker: {
			const newState = {...state};
			newState.userComment = [...state.userComment];

			switch (true) {
				case newState.userComment[action.index].status === "far":
					newState.userComment[action.index].status = "fas active";
					++newState.userComment[action.index].likeCounter;

					break;
				default:
					newState.userComment[action.index].status = "far";
					--newState.userComment[action.index].likeCounter;

					break;
			}

			return newState;
		}
		default:
			return state;
	}
};
