import axios from "axios";

export let endpoints = {
   users: "/users/",
   user_current: "/users/current_user/",
   oauth2_info: "/oauth2_info/",
   login: "/o/token/",
};

export default axios.create({
   baseURL: "http://localhost:8000",
});
