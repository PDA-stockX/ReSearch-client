import axios from "axios";
import { UseSelector } from "react-redux";
const authContext = useSelector((state) => state.auth.authContext);
const Instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: "Bearer " + localStorage.getItem("authToken"),
});

export { Instance };
