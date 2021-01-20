export const addPostActionCreator = (input, target, textChacker) => {
    const action = {
        type: textChacker,
        input: input.current.value
    };

    return action;
};

export const changeInputActionCreator = (input, target, textChacker) => {
    const action = {
        type: textChacker,
        input: input.current.value
    };

    return action;
};

export const likePostActionCreator = (likeBtn, textChacker, index) => {
    const action = {
        type: textChacker,
        btn: likeBtn.current,
        index: index
    };

    return action;
};

export const followingUserActionCreator = (btn, textChecker, index) => {
    const action = {
        type: textChecker,
        btn: btn.current,
        index: index
    };

    return action;
};