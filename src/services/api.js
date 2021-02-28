import axios from "axios";

const api = axios.create({
  baseURL: "https://calculo-de-horas-back-end.herokuapp.com",
});

export default api;
