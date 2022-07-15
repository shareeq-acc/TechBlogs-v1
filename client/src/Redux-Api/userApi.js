import axiosPrivate from "../Api/axios/axiosInterceptors";
import axiosPublic from "../Api/axios/axios";

const url = "http://localhost:8000";

export const auth = async () => {
    return await axiosPrivate.post(`${url}/auth`, {});
};

export const register = async (user) => {
    return await axiosPublic.post(`${url}/user/register`, user);
};

export const login = async (user) => {
    return await axiosPublic.post(`${url}/user/login`, user);
};

export const logout = async () => {
    return await axiosPublic.delete(`${url}/user/logout`);
};

export const confirmationEmail = async (id) => {
    return await axiosPublic.post(`${url}/user/setup/email`, { id: id });
};

export const activateAccount = async (token) => {
    return await axiosPublic.get(`${url}/user/activate/${token}`);
};

export const setupUser = async (data) => {
    return await axiosPrivate.post(`${url}/user/setup/data`, data);
}

export const getUser = async (id) => {
    return await axiosPrivate.post(`${url}/user`, { id });
}
export const changePass = async (id, data) => {
    return await axiosPrivate.put(`${url}/user/new-password/${id}`, data);
}