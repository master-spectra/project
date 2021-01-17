const messegeInit = {
    messegeList: [],
    inputValue: ""
};

export const messegeReducer = (state = messegeInit, action) => {
    const addMessegeCheckerForMessege = "ADD MESSEGE";
    const changeInputCheckerForMessege = "CHANGE INPUT MESSEGE";

    switch (true) {
        case action.type === changeInputCheckerForMessege && action.input.trim().length > 0:
            state.inputValue = action.input;

            return state;
        case action.type === addMessegeCheckerForMessege && action.input.trim().length > 0:
            const userPost = {
                text: action.input
            };

            state.messegeList.push(userPost);
            state.inputValue = "";

            return state;
        default:
            return state;
    };
};