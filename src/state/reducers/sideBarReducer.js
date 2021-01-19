const sideBarInit = [
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
];

export const sideBarReducer = (state = sideBarInit) => {
    const newState = [];

    state.forEach((item, index) => {
       newState[index] = item;
    });

    return newState;
};