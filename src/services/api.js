import axios from "axios";

const api = axios.create({
  baseURL: "https://calculo-de-horas-back-end.vercel.app:3333",
});

export default api;
