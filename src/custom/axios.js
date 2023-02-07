import axios from "axios";

const { REACT_APP_API_HOST } = process.env;

const customAxios = axios.create({
  baseURL: REACT_APP_API_HOST,
});

customAxios.defaults.headers.common["Authorization"] = `Bearer ${
  localStorage.getItem("tube_script_token") || ""
}`;

export default customAxios;
