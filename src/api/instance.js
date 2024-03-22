import axios from "axios";
import { useSelector } from "react-redux";

const Instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});

export { Instance };
