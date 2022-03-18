import axios from "axios";

const BASE_URL = "http://localhost:5000";

const instance = axios.create({
	baseURL: BASE_URL,
    headers: {'X-Custom-Header': 'Social Buzzz'},
    withCredentials:true
});

export default instance;