import {profileReduce} from "./profileReduce.js"; 

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
		]
	},

	getState() {
		return this._state
	},

	subscriber(observer) {
		reRender = observer;
	},

	dispatch(action) {
		profileReduce(this._state, action);
		reRender();
	},

	addPostActionCreator(action, input) {
		action = {
			type: "ADD POST",
			input: input.current.value,
			target: this._state.profile.post
		};

		this.dispatch(action);
		input.current.value = "";
	},

	changeInputActionCreator(action, input) {
		action = {
			type: "CHANGE INPUT",
			input: input.current.value,
			target: this._state.profile.post
		};

		this.dispatch(action);

		console.log(this._state.profile);
	}
};