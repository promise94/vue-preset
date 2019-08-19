import axios from "axios";
import config from "../config/api.config";
import { getToken } from "./auth/utils";

const http = axios.create({
  baseURL: config.base,
  timeout: 30000,
  validateStatus: status => status < 400,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    clientType: "app",
    version: "v1"
  }
});

http.interceptors.request.use(
  config => {
    config.headers["Authorization"] = getToken();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default http;
