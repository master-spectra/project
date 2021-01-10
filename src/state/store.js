import {profileReduce} from "./reducers/profileReduce"; 
import {messegeReduce} from "./reducers/messegeReduce";

let reRender = () => {
	console.log(true);
};

export const store = {
	_state: {
		profile: {
			info: [
				"Andrey Omelchenko",
				"Age: unknow",
				"Home animal: unknow",
				"City: unknow"
			],
			post: [],
			value: ""
		},
		messege: {
			messegeList: [],
			value: ""
		},
		sideBar: [
			{
				name: "Profile",
				link: "/profile"
			},
			{
				name: "Messege",
				link: "/messege"
			},
			{
				name: "Music",
				link: "/music"
			},
			{
				name: "About",
				link: "/about"
			},
			{
				name: "Setting",
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
		profileReduce(this._state, action);
		messegeReduce(this._state, action);
		reRender();

		return this._state;
	},

	addPostActionCreator(action, input, target, textChacker) {
		action = {
			type: textChacker,
			input: input.current.value,
			target: target,
		};

		this.dispatch(action);
		input.current.value = "";
	},

	changeInputActionCreator(action, input, target, textChacker) {
		action = {
			type: textChacker,
			input: input.current.value,
			target: target,
		};

		this.dispatch(action);
	}
};