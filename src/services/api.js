import axios from "axios";

const api = axios.create({
  baseURL: "https://calculo-de-horas-back-end.vercel.app:8080",
});

export default api;
