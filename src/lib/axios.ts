import axios from "axios";

export const apiConnect = axios.create({
    baseURL: '/api',
})