import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-proveu.vercel.app/api/date",
});

export default api;
