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
				likeCounter: 0
			};
			
			state.userComment.push(userPost);
			state.value = "";
			
			return state;
		case action.type === likePostChecker: 
			switch(true) {
				case !action.post.current.classList.contains("liked"):
					++state.userComment[action.index].likeCounter;
					
					action.post.current.classList.add("liked");
					action.btn.current.classList.add("fas");
					action.btn.current.classList.remove("far");

					break;
				default:  
					--state.userComment[action.index].likeCounter;
					
					action.post.current.classList.remove("liked");
					action.btn.current.classList.remove("fas");
					action.btn.current.classList.add("far");

					break;
			};

			return state;
		default:
			return state;
	};
};
