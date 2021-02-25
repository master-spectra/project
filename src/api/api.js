import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "98118e87-f74e-47ed-baba-95942234d67c"}
});

export const getProfile = match => {
    return (
        instance.get(`profile/${match.params.userId}`)
            .then(response => response.data)
    );
};

export const callFolowingOnUser = id => {
    return (
        instance.post(`follow/${id}`, {})
            .then(response => response.data)
    );
};

export const callUnFolowingOnUser = id => {
    return (
        instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    );
};

export const getProfileOnHeader = () => {
    return (
        instance.get(`auth/me`,)
            .then(response => response.data)
    );
};

export const getUsers = (currentPage, pageSize) => {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    );
}