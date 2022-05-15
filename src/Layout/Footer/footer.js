import React from "react";
import "./stylefooter.css";
import {
   AiFillFacebook,
   AiFillGithub,
   AiFillInstagram,
   AiOutlineTwitter,
   AiFillRedditCircle,
} from "react-icons/ai";

const Footer = (props) => {
   return (
      <>
         <div className="footer flex">
            <div className="logo-footer">
               <img src={props.logo} alt="logo" />
            </div>
            <div className="contacts-footer">
               <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover"
               >
                  <AiFillFacebook />
               </a>
               <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover"
               >
                  <AiFillInstagram />
               </a>
               <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover"
               >
                  <AiOutlineTwitter />
               </a>
               <a
                  href="https://github.com/hieungocnguyen"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover"
               >
                  <AiFillGithub />
               </a>
               <a
                  href="https://github.com/hieungocnguyen"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover"
               >
                  <AiFillRedditCircle />
               </a>
            </div>
            <div className="copyright-footer">©️NgocHieu-VanThu</div>
         </div>
      </>
   );
};

export default Footer;
