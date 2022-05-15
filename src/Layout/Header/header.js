import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModel from "../../Components/LogIn";
import SignOnModal from "../../Components/SignOn";
import "./styleheader.css";

const Header = (props) => {
   const [openModalSignIn, setOpenModalSignIn] = useState(false);
   const [openModalSignOn, setOpenModalSignOn] = useState(false);

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
            <div className="right-header flex ">
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
            </div>
         </div>
         {openModalSignIn && <LoginModel closeModal={setOpenModalSignIn} />}
         {openModalSignOn && <SignOnModal closeModal={setOpenModalSignOn} />}
      </>
   );
};

export default Header;
