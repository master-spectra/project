import {profileReducer} from "./reducers/profileReduce";
import {messegeReducer} from "./reducers/messegeReduce";
import { sideBarReducer } from "./reducers/sideBarReducer";

export const store = {
	state: {
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
		return this.state
	},

	dispatch(action) {
		this.state.profile = profileReducer(this.state.profile, action);
		this.state.messege = messegeReducer(this.state.messege, action);
		this.state.sideBar = sideBarReducer(this.state.sideBar);
	}
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
}