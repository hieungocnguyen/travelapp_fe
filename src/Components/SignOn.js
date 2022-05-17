import { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import API, { authAxios, endpoints } from "../configs/API";
import { Form, Button, Container } from "react-bootstrap";

const SignOnModal = ({ closeModal }) => {
   const [newUser, setNewUser] = useState({
      username: "",
      password: "",
      email: "",
   });
   const avatar = useRef();
   const nav = useNavigate();
   const change = (obj) => {
      setNewUser({
         ...newUser,
         ...obj,
      });
   };
   const signOn = async (event) => {
      event.preventDefault();
      let data = new FormData();

      data.append("username", newUser.username);
      data.append("password", newUser.password);
      data.append("email", newUser.email);
      data.append("avatar", avatar.current.files[0]);

      try {
         const res = await API.post(endpoints["users"], data, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         });
         if (res.status === 201) {
            closeModal(false);
            alert("Sign on successful");
         }
      } catch (error) {
         console.error(error);
      }
   };

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
                  <Form onSubmit={signOn} className="signOn-modal--inputPanel">
                     <Form.Group className="inputPanel-signOn--usernameField">
                        <Form.Label className="usernameField-inputPanel--username">
                           Username
                        </Form.Label>
                        <Form.Control
                           type="text"
                           className="usernameField-inputPanel--inputUsername"
                           value={newUser.username}
                           onChange={(evt) =>
                              change({ username: evt.target.value })
                           }
                        ></Form.Control>
                     </Form.Group>
                     <Form.Group className="inputPanel-signOn--usernameField">
                        <Form.Label className="usernameField-inputPanel--username">
                           Password
                        </Form.Label>
                        <Form.Control
                           type="password"
                           className="usernameField-inputPanel--inputUsername"
                           value={newUser.password}
                           onChange={(evt) =>
                              change({ password: evt.target.value })
                           }
                        ></Form.Control>
                     </Form.Group>
                     {/* <div className="inputPanel-signOn--usernameField">
                           <div className="usernameField-inputPanel--username">
                              Confirm Password
                           </div>
                           <input
                              type="password"
                              className="usernameField-inputPanel--inputUsername"
                           ></input>
                        </div> */}
                     <Form.Group className="inputPanel-signOn--usernameField">
                        <Form.Label className="usernameField-inputPanel--username">
                           Email address
                        </Form.Label>
                        <Form.Control
                           type="email"
                           className="usernameField-inputPanel--inputUsername"
                           value={newUser.email}
                           onChange={(evt) =>
                              change({ email: evt.target.value })
                           }
                        ></Form.Control>
                     </Form.Group>
                     <Form.Group className="inputPanel-signOn--usernameField">
                        <Form.Label className="usernameField-inputPanel--username">
                           Avatar
                        </Form.Label>
                        <Form.Control
                           type="file"
                           name="avatar-upload"
                           ref={avatar}
                        ></Form.Control>
                     </Form.Group>
                     <Form.Group className="inputPanel-signOn--buttonLogin">
                        <button
                           type="submit"
                           className="buttonSignOn-inputPanel-submit"
                        >
                           Sign On
                        </button>
                     </Form.Group>
                     <Link to="/" className="inputPanel-signOn--resetPassword">
                        I already have an account
                     </Link>
                  </Form>
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
