import axios from "axios";
// continu fetching data in axios
import { locatData } from "../../uitilities/localStore";
// http://locathost:3000/api/v1/register
// http://locathost:3000/api/v1/login
// http://locathost:3000/api/v1/patients
// http://locathost:3000/api/v1/doctor

export default axios.create({
  baseURL: "http://localhost:3000/api/v1/",

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `bearer ${locatData("Token")}`,
  },
});
