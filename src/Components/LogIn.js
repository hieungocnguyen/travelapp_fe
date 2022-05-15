import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const LoginModel = ({ closeModal }) => {
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
               <div className="login-modelContainer--loginPanel">
                  <div className="loginPanel-login--usernameField">
                     <div className="usernameField-loginPanel--username">
                        Username
                     </div>
                     <input
                        type="text"
                        className="usernameField-loginPanel--inputUsername"
                     ></input>
                  </div>
                  <div className="loginPanel-login--usernameField">
                     <div className="usernameField-loginPanel--username">
                        Password
                     </div>
                     <input
                        type="password"
                        className="usernameField-loginPanel--inputUsername"
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
