import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import API, { authAxios, endpoints } from "../configs/API";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import cookies from "react-cookies";

const LoginModel = ({ closeModal }) => {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
   const [user, dispatch] = useContext(UserContext);
   const [errMsg, setErrMsg] = useState(null);

   const login = async (event) => {
      event.preventDefault();

      try {
         const res = await API.post(endpoints["login"], {
            client_id: "C7yBw5T73TgxfdUmBLR4fCA5JEJ0gMEWnLF8O6SV",
            client_secret:
               "bkyn0d0W73zIZdJ4Nd5rJFMwtizbTSelrWZXQYlCNIMPgWzBblL78tw1ZtW1VSxtjBA8ZZw70YKcYiI5A4mvLYvDk8cIYWKjrQpR95jvHxpEXaFg0hclvpny7FSupy72",
            username: username,
            password: password,
            grant_type: "password",
         });

         if (res.status === 200) {
            cookies.save("access_token", res.data.access_token);
            const user = await authAxios().get(endpoints["current_user"]);
            cookies.save("current_user", user.data);
            console.log(user.data);
            dispatch({
               type: "login",
               payload: user.data,
            });
            closeModal(false);
         }
      } catch (error) {
         console.info(error);
         setErrMsg("Username hoac password KHONG chinh xac!!!");
      }
   };

   return (
      <>
         <div className="login-model--background">
            <div className="login-modalContainer--close">
               <button
                  className="login-modalContainer--closeButton"
                  onClick={() => {
                     closeModal(false);
                  }}
               >
                  <AiFillCloseCircle />
               </button>
            </div>
            <div className="login-model--container">
               <div className="login-modelContainer--title">Log in</div>

               <form onSubmit={login}>
                  <div className="login-modelContainer--loginPanel">
                     <div className="loginPanel-login--usernameField">
                        <div className="usernameField-loginPanel--username">
                           Username
                        </div>
                        <input
                           type="text"
                           className="usernameField-loginPanel--inputUsername"
                           onChange={(evt) => setUsername(evt.target.value)}
                           value={username}
                        ></input>
                     </div>
                     <div className="loginPanel-login--usernameField">
                        <div className="usernameField-loginPanel--username">
                           Password
                        </div>
                        <input
                           type="password"
                           className="usernameField-loginPanel--inputUsername"
                           onChange={(evt) => setPassword(evt.target.value)}
                           value={password}
                        ></input>
                     </div>
                     <div className="loginPanel-login--buttonLogin">
                        <button
                           type="submit"
                           className="buttonLogin-loginPanel-submit"
                        >
                           Log in
                        </button>
                     </div>
                     <Link to="/" className="loginPanel-login--resetPassword">
                        Dont remember password
                     </Link>
                  </div>
               </form>
               <div className="login-modelContainer--divine"></div>
               <div className="login-modelContainer--loginOtherWay">
                  <div className="loginOtherWay-login-title">
                     Or log in with:
                  </div>
                  <div className="loginOtherWay-login-buttonsLogin">
                     <div className="buttonsLogin-loginOtherWay--facebook">
                        <Link to="/">Facebook</Link>
                     </div>
                     <div className="buttonsLogin-loginOtherWay--google">
                        <Link to="/">Google</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default LoginModel;
