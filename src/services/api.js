import axios from "axios";

const api = axios.create({
  baseURL: "http://calculatorbd-com.umbler.net/:8080",
});

export default api;
