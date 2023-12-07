import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")

        config.headers["Authorization"] = `Bearer ${token}`
        config.headers["Accsess-Control-Allow-Origin"] = '*';

        return config;
    },
    (error) => Promise.reject(error)
);

export default axios;