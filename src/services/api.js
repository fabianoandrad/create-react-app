import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-calc.vercel.app",
});

export default api;
