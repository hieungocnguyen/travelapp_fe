import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config";

function FirebaseInit() {
   initializeApp(firebaseConfig);
}

export default FirebaseInit;
