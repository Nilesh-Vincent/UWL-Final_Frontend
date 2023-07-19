import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://nilesh-uwl-final.onrender.com/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const jwtCookie = Cookies.get("jwt");
    if (jwtCookie) {
      config.headers["Authorization"] = `Bearer ${jwtCookie}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
