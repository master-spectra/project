// import reducer's for it's call in method dispatch 
import {profileReducer} from "./reducers/profileReduce"; 
import {messegeReducer} from "./reducers/messegeReduce";

let reRender = () => { // create function for rerender DOM at change state  
	console.log(true);
};

export const store = { // create BLL
	_state: { // create state this safe information about App and user
		// this block state safe information about user
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
		// this block state safe information about messege user
 		messege: {
			messegeList: [],
			inputValue: ""
		},
		// this block state safe link in sideBar
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

	// this method create for return state. It getter
	getState() { 
		return this._state
	},

	// this method create for get function render 
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
	},

	likePostActionCreator(action, likeBtn, textChacker, index) {
		action = {
			type: textChacker,
			btn: likeBtn,
			index: index
		};
		
		this.dispatch(action);
	}
};