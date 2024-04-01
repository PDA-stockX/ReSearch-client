import axios from "axios";

const cInstance = axios.create({
  baseURL: "/api",
});

export { cInstance };
