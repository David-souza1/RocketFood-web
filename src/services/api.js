import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketfood-api-e10i.onrender.com"
});
