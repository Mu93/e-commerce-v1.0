import { toast } from "react-toastify";
import http from "./httpServices";

const apiUrl = "https://fakestoreapi.com";

// getAllProducts
const getAllProducts = async () => {
  const { data } = await http.get(apiUrl + "/products");
  return data;
};
const getAllCategories = async () => {
  const { data } = await http.get(apiUrl + "/categories");
  return data;
};

// AddNewUser
const AddNewUser = async (user) => {
  return await http.post(apiUrl + "/users", user);
};
// UserLogin
const UserLogin = async (user) => {
  return await http.post(apiUrl + "/auth/login", user);
};

const getCurrentUser = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
};
export { AddNewUser, UserLogin, getAllProducts, getCurrentUser };
