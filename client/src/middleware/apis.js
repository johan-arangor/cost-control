import axios from "axios";
import { url, token } from "../globals";

const connectionApi = axios.create({
    baseURL: url
});

connectionApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'access-token' : token
    }

    return config;
})

export default connectionApi;