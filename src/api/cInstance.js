import axios from "axios";
import { useSelector } from "react-redux";
import persist from "~/utils/persist";
const cInstance = axios.create({
  baseURL: "",
  timeout: 1000,
});

export { cInstance };
