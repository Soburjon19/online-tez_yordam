import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/firebase.init";

initAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  console.log(name);
  const [isLoad, setIsLoad] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setIsLoad(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoad(false);
      });
  };
  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider).catch((error) => {
      setError(error.message);
    });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      alert("Signed out");
      setUser({});
    });
  };
  const handlePassword = (e) => {
    setPassWord(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleLoadingPage = (e) => {
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        setError(error.message);
      }
    );
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {
      setName();
    });
  };
  const emailPasswordLogin = () => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setError(error.message);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoad(false);
    });
  }, []);
  return {
    user,
    error,
    googleSignIn,
    githubSignIn,
    logOut,
    handleEmail,
    handlePassword,
    handleLoadingPage,
    emailPasswordLogin,
    isLoad,
    setUserName,
    handleName,
    email,
    password,
  };
};

export default useFirebase;
