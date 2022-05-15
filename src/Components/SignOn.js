import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignOnModal = ({ closeModal }) => {
   return (
      <>
         <div className="signOn--modal">
            <div className="signOn-Modal--close">
               <button
                  className="signOn-Modal--closeButton"
                  onClick={() => {
                     closeModal(false);
                  }}
               >
                  <AiFillCloseCircle />
               </button>
            </div>
            <div className="signOn-Modal--title">Sign in</div>
            <div className="signOn-Modal--container">
               <div className="signOn-Modal--main">
                  <div className="signOn-modal--inputPanel">
                     <div className="inputPanel-signOn--usernameField">
                        <div className="usernameField-inputPanel--username">
                           Username
                        </div>
                        <input
                           type="text"
                           className="usernameField-inputPanel--inputUsername"
                        ></input>
                     </div>
                     <div className="inputPanel-signOn--usernameField">
                        <div className="usernameField-inputPanel--username">
                           Password
                        </div>
                        <input
                           type="password"
                           className="usernameField-inputPanel--inputUsername"
                        ></input>
                     </div>
                     <div className="inputPanel-signOn--usernameField">
                        <div className="usernameField-inputPanel--username">
                           Confirm Password
                        </div>
                        <input
                           type="password"
                           className="usernameField-inputPanel--inputUsername"
                        ></input>
                     </div>
                     <div className="inputPanel-signOn--usernameField">
                        <div className="usernameField-inputPanel--username">
                           Email address
                        </div>
                        <input
                           type="email"
                           className="usernameField-inputPanel--inputUsername"
                        ></input>
                     </div>
                     <div className="inputPanel-signOn--usernameField">
                        <div className="usernameField-inputPanel--username">
                           Avatar
                        </div>
                        <input type="file" name="avatar-upload"></input>
                     </div>
                     <div className="inputPanel-signOn--buttonLogin">
                        <button
                           type="submit"
                           className="buttonSignOn-inputPanel-submit"
                        >
                           Sign On
                        </button>
                     </div>
                     <Link to="/" className="inputPanel-signOn--resetPassword">
                        I already have an account
                     </Link>
                  </div>
                  <div className="signOn-modal--divine"></div>
                  <div className="signOn-modal--otherWayPanel">
                     <div className="signOnOtherWay-signOn-title">
                        Or sign on with:
                     </div>
                     <div className="signOnOtherWay-signOn-buttonsSignOn">
                        <div className="buttonsSignOn-signOnOtherWay--facebook">
                           <Link to="/">Facebook</Link>
                        </div>
                        <div className="buttonsSignOn-signOnOtherWay--google">
                           <Link to="/">Google</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SignOnModal;
