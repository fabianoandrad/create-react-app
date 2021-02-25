import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-calc-hcjdqi7oz-fabianoandrad.vercel.app",
});

export default api;
