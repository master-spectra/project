export const profileReduce = (state, action) => {
	if (action.type === "CHANGE INPUT") {
		state.profile.value = action.input;
		return state;
	} else if (action.type === "ADD POST") {
		const data = {
			text: action.input
		};

		action.target.push(data);
	};
};