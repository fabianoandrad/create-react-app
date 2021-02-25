import axios from "axios";

const api = axios.create({
  baseURL: "https://affatecnologia.com.br",
});

export default api;
