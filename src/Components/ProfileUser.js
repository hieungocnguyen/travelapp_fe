import { useContext, useEffect, useRef, useState } from "react";
import { Container, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { authAxios, endpoints } from "../configs/API";

const ProfileUser = () => {
   const [user, dispatch] = useContext(UserContext);
   const avatarL = useRef();
   const nav = useNavigate();
   const [firstName, setFirstName] = useState(user.first_name);
   const [lastName, setLastName] = useState(user.last_name);

   console.log(user);

   const changeProfile = async (event) => {
      event.preventDefault();

      const pack = await authAxios().patch(
         endpoints["user-id"](user.id),
         {
            avatar: avatarL.current.files[0],
            first_name: firstName,
            last_name: lastName,
         },
         {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         }
      );
      console.log(pack.data);
      console.log(pack.status);
      if (pack.status === 200) {
         alert("Successful! Please log in again");
      }
   };
   if (user === null)
      return (
         <Container>
            <Spinner animation="grow" />
         </Container>
      );
   return (
      <>
         <Form className="profile-user-container" onSubmit={changeProfile}>
            <h2 className="header-profile-user">Profile user</h2>
            <div className="info-profile-user-container">
               <div className="infoProfile-avatar-container">
                  <img
                     src={user.avatar_path}
                     alt="avatar"
                     className="avatar-user-profile"
                  ></img>
                  <Form.Group className="inputPanel-avatar-profile">
                     <Form.Label className="usernameField-inputPanel--username">
                        Change avatar
                     </Form.Label>
                     <Form.Control
                        type="file"
                        name="avatar-upload"
                        ref={avatarL}
                     ></Form.Control>
                  </Form.Group>
               </div>

               <div className="infoProfile-dataUser-container">
                  <div className="info-username-email-profile-user">
                     <div className="info-username-profile-user">
                        Username: {user.username}
                     </div>
                     <div className="info-email-profile-user">
                        Email: {user.email}
                     </div>
                  </div>

                  <Form.Group className="inputPanel-signOn--profileUser">
                     <Form.Label className="usernameField-inputPanel--username">
                        FirstName:
                     </Form.Label>
                     <Form.Control
                        type="text"
                        className="usernameField-inputPanel--inputUsername"
                        value={firstName}
                        onChange={(evt) => setFirstName(evt.target.value)}
                     ></Form.Control>
                  </Form.Group>
                  <Form.Group className="inputPanel-signOn--profileUser">
                     <Form.Label className="usernameField-inputPanel--username">
                        LastName:
                     </Form.Label>
                     <Form.Control
                        type="text"
                        className="usernameField-inputPanel--inputUsername"
                        value={lastName}
                        onChange={(evt) => setLastName(evt.target.value)}
                     ></Form.Control>
                  </Form.Group>
               </div>
            </div>
            <Form.Group className="inputPanel-signOn--buttonLogin">
               <button type="submit" className="buttonSignOn-inputPanel-submit">
                  Change
               </button>
            </Form.Group>
         </Form>
         {user.auth_provider === "default" && <NewPasswordChange />}
      </>
   );
};

const NewPasswordChange = ({}) => {
   const [pw, setPw] = useState();
   const [confirmPw, setConfirmPw] = useState();
   const [checkPw, setCheckPw] = useState(false);
   const [user] = useContext(UserContext);

   const changePassword = async (event) => {
      event.preventDefault();

      try {
         const sendPass = await authAxios().post(
            endpoints["user-change-password"](user.id),
            {
               password: pw,
            },
            {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            }
         );
         if (sendPass.status === 200) {
            console.log("Change successfully!");
         }
         if (sendPass.status === 201) {
            console.log("Change successfully!");
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      if (confirmPw !== pw) {
         setCheckPw(true);
      } else {
         setCheckPw(false);
      }
   }, [confirmPw, pw]);
   return (
      <>
         <form onSubmit={changePassword} className="form-change-password">
            <div className="header-changePassword-user">Change Password</div>
            <div>New password</div>
            <input
               type="password"
               value={pw}
               onChange={(evt) => setPw(evt.target.value)}
               className="usernameField-inputPanel--inputUsername"
            ></input>
            <div>Confirm new password</div>
            <input
               type="password"
               value={confirmPw}
               onChange={(evt) => setConfirmPw(evt.target.value)}
               className="usernameField-inputPanel--inputUsername"
            ></input>
            {checkPw && <div>not match</div>}
            <div className="button-changepassword-container">
               <button
                  type="sumbit"
                  disabled={checkPw}
                  className="buttonSignOn-inputPanel-submit"
               >
                  Submit
               </button>
            </div>
         </form>
      </>
   );
};

export default ProfileUser;
