import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": import.meta.env.VITE_CAT_API_KEY,
  },
});

export default axiosInstance;
