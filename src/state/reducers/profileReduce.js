const profileInit = {
	userInfo: [
		"Andrey Omelchenko",
		"Age: unknow",
		"Home animal: unknow",
		"City: unknow"
	],
	userComment: [],
	inputValue: "",
	currentProfile: null
};

export const profileReducer = (state = profileInit, action) => {
	const addPostCheckerForProfileChecker 		= "ADD POST";
	const changeInputCheckerForProfileChecker 	= "CHANGE INPUT PROFILE";
	const likePostChecker						= "LIKE POST";
	const setProfileChecker						= "SET PROFILE";
	const newState 								= {...state};

	switch (true) {
		case changeInputCheckerForProfileChecker === action.type:
			newState.inputValue = action.input;

			return newState;
		case action.type === addPostCheckerForProfileChecker && action.input.trim().length > 0:
			const userPost = {
				comment: action.input,
				likeCounter: 0,
				status: "far"
			};

			newState.userComment = [...state.userComment];
			newState.userComment.push(userPost);
			newState.inputValue = "";

			return newState;
		case action.type === likePostChecker:
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
		case setProfileChecker === action.type:
			newState.currentProfile = {...action.profile};
			return newState;
		default:
			return state;
	}
};
