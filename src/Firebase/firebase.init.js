import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initAuthentication;
