import FacebookLogin from "react-facebook-login";
import { Button } from "react-bootstrap";
import FirebaseInit from "../firebase/firebase-init";
import ReactStars from "react-rating-stars-component";
import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   signOut,
} from "firebase/auth";

function Apptest() {
   const responseFacebook = (response) => {
      console.log(response);
      console.log(response.accessToken);
   };

   FirebaseInit();
   const provider = new GoogleAuthProvider();
   const handleGoogleSignedIn = () => {
      const auth = getAuth();
      signInWithPopup(auth, provider).then((result) => {
         console.log({ auth_token: result._tokenResponse.oauthIdToken });
         console.log({ username: result._tokenResponse.fullName });
         console.log({ avatar: result._tokenResponse.photoUrl });
      });
   };

   const logout = () => {
      const auth = getAuth();
      signOut(auth)
         .then(() => {
            console.log("done");
         })
         .catch(() => {
            console.log("err");
         });
   };
   const ratingChanged = (newRating) => {
      console.log(newRating);
   };
   return (
      <div className="App">
         <FacebookLogin
            appId="1351993755298694"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
         />

         <button onClick={handleGoogleSignedIn}>Đăng nhập với Google</button>
         <button onClick={logout}>dang xuat</button>

         <ReactStars
            count={5}
            onChange={ratingChanged}
            size={50}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
         />
      </div>
   );
}

export default Apptest;
