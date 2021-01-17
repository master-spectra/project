import {profileReducer} from "./reducers/profileReduce";
import {messegeReducer} from "./reducers/messegeReduce";

let reRender = () => {
    console.log(true);
};

export const store = {
    _state: {
        profile: {
            userInfo: [
                "Andrey Omelchenko",
                "Age: unknow",
                "Home animal: unknow",
                "City: unknow"
            ],
            userComment: [],
            inputValue: ""
        },
        messege: {
            messegeList: [],
            inputValue: ""
        },
        sideBar: [
            {
                nameLink: "Profile",
                link: "/profile"
            },
            {
                nameLink: "Messege",
                link: "/messege"
            },
            {
                nameLink: "Music",
                link: "/music"
            },
            {
                nameLink: "About",
                link: "/about"
            },
            {
                nameLink: "Setting",
                link: "/setting"
            }
        ],
    },

    getState() {
        return this._state
    },

    subscriber(observer) {
        reRender = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messege = messegeReducer(this._state.messege, action);

        reRender();
    },
};

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
        btn: likeBtn,
        index: index
    };

    return action;
};