import axios from "axios";

const api = axios.create({
  baseURL: "http://https://calculo-de-horas-back-end.vercel.app",
});

export default api;
