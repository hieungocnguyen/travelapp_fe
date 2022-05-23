import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import LoginModel from "../../Components/LogIn";
import SignOnModal from "../../Components/SignOn";
import API, { endpoints } from "../../configs/API";
import "./styleheader.css";
import cookies from "react-cookies";
import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   signOut,
} from "firebase/auth";

const Header = (props) => {
   const [openModalSignIn, setOpenModalSignIn] = useState(false);
   const [openModalSignOn, setOpenModalSignOn] = useState(false);
   const nav = useNavigate();
   const [isPopUp, setPopup] = useState("true");
   const [clientId, setClientId] = useState();
   const [clientSecret, setClientSecret] = useState();

   const [user, dispatch] = useContext(UserContext);

   // useEffect(() => {
   //    const loadClientKey = async () => {
   //       const res = await API.get(endpoints["oauth2_info"]);
   //       setClientId(res.data.client_id);
   //       setClientSecret(res.data.client_secret);
   //    };
   //    loadClientKey();
   // }, []);

   const logout = (event) => {
      event.preventDefault();
      cookies.remove("access_token");
      cookies.remove("current_user");
      dispatch({ type: "logout" });
      nav("/");
   };

   let replaceRightPart = //phan nay la default right part header
      (
         <>
            <a
               href="#"
               className="login-right-header hover"
               onClick={() => {
                  setOpenModalSignIn(true);
               }}
            >
               Log in
            </a>
            <Link
               to="/"
               className="signout-right-header hover"
               onClick={() => {
                  setOpenModalSignOn(true);
               }}
            >
               Sign on
            </Link>
         </>
      );

   const ToggleClass = () => {
      setPopup(!isPopUp);
   };

   if (user != null) {
      console.log(user);
      replaceRightPart = (
         <>
            <div href="#" className="login-right-header">
               {user.username}
            </div>
            <div className="signout-right-header">
               <div
                  className="user-Header-avatarContainer"
                  onClick={ToggleClass}
               >
                  <img
                     src={user.avatar_path}
                     alt="avatar-user"
                     className="user-Header-avatar"
                  />
               </div>
               <div
                  className={
                     isPopUp
                        ? "user-popup-header"
                        : "user-popup-header showPopup"
                  }
               >
                  <Link
                     to={`/bill/${user.id}`}
                     className="user-popup-header--profile"
                     onClick={ToggleClass}
                  >
                     Bill
                  </Link>
                  <Link
                     to={`/profile/${user.id}`}
                     className="user-popup-header--profile"
                     onClick={ToggleClass}
                  >
                     Profile
                  </Link>
                  <a
                     href="#"
                     className="user-popup-header--logout"
                     onClick={logout}
                  >
                     Logout
                  </a>
               </div>
            </div>
         </>
      );
   }
   return (
      <>
         {/* <ul>
            <li>
               <a href="{% url 'social:begin' 'google-oauth2' %}?next={{ request.path }}">
                  Login with Google
               </a>
            </li>
         </ul> */}
         <div className="header flex">
            <div className="left-header flex">
               <Link to="/tours" className="tours-left-header hover">
                  Tours
               </Link>
               <Link to="/news" className="news-left-header hover">
                  News
               </Link>
            </div>
            <div className="logo-header flex ">
               <Link to="/">
                  <img src={props.logo} />
               </Link>
            </div>
            <div className="right-header flex ">{replaceRightPart}</div>
         </div>
         {openModalSignIn && <LoginModel closeModal={setOpenModalSignIn} />}
         {openModalSignOn && <SignOnModal closeModal={setOpenModalSignOn} />}
      </>
   );
};

export default Header;
