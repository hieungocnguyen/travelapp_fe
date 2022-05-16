import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import LoginModel from "../../Components/LogIn";
import SignOnModal from "../../Components/SignOn";
import API, { endpoints } from "../../configs/API";
import "./styleheader.css";

const Header = (props) => {
   const [openModalSignIn, setOpenModalSignIn] = useState(false);
   const [openModalSignOn, setOpenModalSignOn] = useState(false);

   const [clientId, setClientId] = useState();
   const [clientSecret, setClientSecret] = useState();

   const [user, dispatch] = useContext(UserContext);

   useEffect(() => {
      const loadClientKey = async () => {
         const res = await API.get(endpoints["oauth2_info"]);
         setClientId(res.data.client_id);
         setClientSecret(res.data.client_secret);
      };
      loadClientKey();
   }, []);

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
               Username
            </a>
            <a
               href="#"
               className="signout-right-header hover"
               onClick={() => {
                  setOpenModalSignOn(true);
               }}
            >
               Avatar
            </a>
         </>
      );
   }
   return (
      <>
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
