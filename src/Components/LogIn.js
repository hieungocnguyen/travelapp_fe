import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import API, { authAxios, endpoints } from "../configs/API";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import cookies from "react-cookies";
import FacebookLogin from "react-facebook-login";
import FirebaseInit from "../firebase/firebase-init";
import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   signOut,
} from "firebase/auth";

const LoginModel = ({ closeModal }) => {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
   const [user, dispatch] = useContext(UserContext);
   const [errMsg, setErrMsg] = useState(null);

   const login = async (event) => {
      event.preventDefault();

      try {
         const clientKey = await API.get(endpoints["oauth2_info"]);
         const res = await API.post(endpoints["login"], {
            client_id: clientKey.data.client_id,
            client_secret: clientKey.data.client_secret,
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
         console.info(error, error.stack);
         alert(`Login information is incorrect ❌`);
      }
   };

   FirebaseInit();
   const provider = new GoogleAuthProvider();
   const handleGoogleSignedIn = () => {
      const auth = getAuth();
      console.log(auth);
      signOut(auth);
      signInWithPopup(auth, provider).then(async (result) => {
         const googleAccess = await API.post(endpoints["google-access"], {
            auth_token: result._tokenResponse.oauthIdToken,
         });
         console.log(googleAccess.data);
         cookies.save("access_token", googleAccess.data.tokens.access);
         const user = await authAxios().get(endpoints["current_user"]);
         cookies.save("current_user", user.data);
         console.log(user.data);
         dispatch({
            type: "login",
            payload: user.data,
         });
         closeModal(false);
      });
   };

   const responseFacebook = async (response) => {
      try {
         const facebookAccess = await API.post(endpoints["facebook-access"], {
            auth_token: response.accessToken,
         });
         console.log(facebookAccess.data.tokens.access);
         if (facebookAccess.status === 400) {
            console.log(facebookAccess.data.auth_token);
         }
         cookies.save("access_token", facebookAccess.data.tokens.access);
         const user = await authAxios().get(endpoints["current_user"]);
         cookies.save("current_user", user.data);
         console.log(user.data);
         dispatch({
            type: "login",
            payload: user.data,
         });
         closeModal(false);
      } catch (error) {
         alert(error.response.data.auth_token);
      }
   };

   return (
      <>
         <div className="background-blur-modal"></div>
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
                     <Link
                        to="/recovery"
                        className="loginPanel-login--resetPassword"
                        onClick={() => {
                           closeModal(false);
                        }}
                     >
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
                        <div className="App">
                           <FacebookLogin
                              appId="1351993755298694"
                              autoLoad={false}
                              fields="name,email,picture"
                              callback={responseFacebook}
                           />
                        </div>
                        {/* <Link to="/fblogin" onClick={() => closeModal(false)}>
                              <FbLogin />
                           </Link> */}
                     </div>
                     <button
                        className="buttonsLogin-loginOtherWay--google"
                        onClick={handleGoogleSignedIn}
                     >
                        Log in with Google
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default LoginModel;
