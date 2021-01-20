import { profileReducer } from "./reducers/profileReduce";
import { messegeReducer } from "./reducers/messegeReduce";
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
			},
			{
				nameLink: "Find user",
				link: "/find"
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