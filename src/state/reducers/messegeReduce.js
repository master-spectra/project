export const messegeReduce = (state, action) => {
	const addMessegeCheckerForMessege 	= "ADD MESSEGE";	
	const changeInputCheckerForMessege 	= "CHANGE INPUT MESSEGE";
	
	switch (true) {
		case action.type === changeInputCheckerForMessege && action.input.trim().length > 0: 
			state.messege.value = action.input;

			return state;
			break;
		case action.type === addMessegeCheckerForMessege && action.input.trim().length > 0: 
			const data = {
				text: action.input
			};

			action.target.push(data);
			state.messege.value = "";
			
			return state;
			break;
	};
};