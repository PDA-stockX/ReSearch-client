import axios from "axios";
import { getAuthContext } from "~/utils/persist";

const Instance = axios.create({
  baseURL: "/api",
  // timeout: 1000,
  headers: { Authorization: "Bearer " + getAuthContext().token },
});

export { Instance };
