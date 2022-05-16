import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API, { endpoints } from "../configs/API";

const RecoveryPassword = () => {
   const [email, setEmail] = useState();
   const [confirm, setConfirm] = useState(false);
   const nav = useNavigate();

   const checkMail = async (event) => {
      event.preventDefault();
      try {
         const code = await API.post(
            endpoints["recoveryPass"],
            { email: email },
            {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            }
         );
         console.log(code.data);
         setConfirm();
      } catch (error) {
         console.log(error);
         alert("Your email does not exist");
      }
   };
   const confirmPassword = async (event) => {
      event.preventDefault();
      try {
         const sendConfirmCode = await API.post(
            endpoints["confirmPass"],
            { email: email, confirm_code: confirm },
            {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            }
         );

         if (sendConfirmCode.status === 200) {
            console.log(sendConfirmCode.data);
            nav("/");

            alert("Your new password is confirm code");
         }
      } catch (error) {
         console.info(error);
         alert("Confirm code wrong");
      }
   };
   if (confirm !== false) {
      return (
         <>
            <div className="recoveryPassword--container">
               <h2 className="title-recoveryPassword">Confirm Code</h2>
               <form
                  onSubmit={confirmPassword}
                  className="form-recoveryPassword"
               >
                  <input
                     type="email"
                     placeholder="email..."
                     value={email}
                     onChange={(evt) => setEmail(evt.target.value)}
                     className="inputEmail-recoveryPassword"
                  ></input>
                  <input
                     type="text"
                     placeholder="XXXX"
                     value={confirm}
                     onChange={(evt) => setConfirm(evt.target.value)}
                     className="inputEmail-recoveryPassword"
                  ></input>
                  <button type="summit" className="button-recoveryPassword">
                     Send
                  </button>
               </form>
            </div>
         </>
      );
   }

   return (
      <>
         <div className="recoveryPassword--container">
            <h2 className="title-recoveryPassword">Confirm email</h2>
            <form onSubmit={checkMail} className="form-recoveryPassword">
               <input
                  text="email"
                  placeholder="email..."
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  className="inputEmail-recoveryPassword"
               ></input>
               <button type="summit" className="button-recoveryPassword">
                  Send
               </button>
            </form>
         </div>
      </>
   );
};

export default RecoveryPassword;
