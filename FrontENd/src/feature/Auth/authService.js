import axios from "axios";

const API_URL = "/api/user";

const register = async (formData) => {
  // console.log(formData);
  const response = await axios.post(API_URL + "/register", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  console.log(response.data);
  return response.data;
};

const login = async (formData) => {
  // console.log(formData);
  const response = await axios.post(API_URL + "/login", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
  // console.log(response.data);
};

const authServices = {
  register,
  login,
};

export default authServices;
