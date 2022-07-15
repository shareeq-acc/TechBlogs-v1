import axiosPublic from "../Api/axios/axios.js"
import axiosPrivate from "../Api/axios/axiosInterceptors.js"
const url = "http://localhost:8000";

export const newBlog = async (formData) => {
    return await axiosPrivate.post(`${url}/blog/create`, formData);
};

export const getUserBlogs = async (userId) => {
    return await axiosPrivate.get(`${url}/blog/user/${userId}`);
};

export const getBlog = async (blogId, strict) => {
    return await axiosPrivate.post(`${url}/blog/view/${blogId}`, strict ? { strict: true } : {});
};

export const getBlogs = async () => {
    return await axiosPublic.get(`${url}/blog`);
};

export const deleteBlog = async (blogId) => {
    return await axiosPrivate.delete(`${url}/blog/delete/${blogId}`);
};

export const editBlog = async (blogId, blog) => {
    return await axiosPrivate.put(`${url}/blog/update/${blogId}`, blog);
};
