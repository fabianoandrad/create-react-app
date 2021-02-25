import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-calc-99zmfprzp-fabianoandrad.vercel.app",
});

export default api;
