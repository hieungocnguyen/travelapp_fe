import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import LoginModel from "../../Components/LogIn";
import SignOnModal from "../../Components/SignOn";
import API, { endpoints } from "../../configs/API";
import "./styleheader.css";
import cookies from "react-cookies";

const Header = (props) => {
   const [openModalSignIn, setOpenModalSignIn] = useState(false);
   const [openModalSignOn, setOpenModalSignOn] = useState(false);

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
            <a
               href="#"
               className="signout-right-header hover"
               onClick={() => {
                  setOpenModalSignOn(true);
               }}
            >
               Sign on
            </a>
         </>
      );
   if (user != null) {
      replaceRightPart = (
         <>
            <a
               href="#"
               className="login-right-header hover"
               onClick={() => {
                  setOpenModalSignIn(true);
               }}
            >
               {user.username}
            </a>
            <a href="#" className="signout-right-header hover" onClick={logout}>
               <div className="user-Header-avatarContainer">
                  <img
                     src={user.avatar_path}
                     alt="avatar-user"
                     className="user-Header-avatar"
                  />
               </div>
            </a>
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
