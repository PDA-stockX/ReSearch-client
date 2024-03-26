import axios from "axios";
import { useSelector } from "react-redux";
import persist from "~/utils/persist";
const Instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { Authorization: "Bearer " + persist().token },
});

export { Instance };