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
		profileReducer(this._state.profile, action);
		messegeReducer(this._state.messege, action);

		reRender();
	},

	addPostActionCreator(action, input, target, textChacker) {
		action = {
			type: textChacker,
			input: input.current.value
		};

		this.dispatch(action);
		input.current.value = "";
	},

	changeInputActionCreator(action, input, target, textChacker) {
		action = {
			type: textChacker,
			input: input.current.value
		};

		this.dispatch(action);
	}
};