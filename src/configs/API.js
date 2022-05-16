import axios from "axios";
import cookies from "react-cookies";

export let endpoints = {
   users: "/users/",
   current_user: "/users/current_user/",
   oauth2_info: "/oauth2_info/",
   login: "/o/token/",
   tours: "/tours/",
   tags: "/tags/",
   recoveryPass: "/users/reset_password/",
   confirmPass: "/users/reset_password/confirm/",
};

export const authAxios = () =>
   axios.create({
      baseURL: "http://localhost:8000",
      headers: {
         Authorization: `Bearer ${cookies.load("access_token")}`,
      },
   });

export default axios.create({
   baseURL: "http://localhost:8000",
});
