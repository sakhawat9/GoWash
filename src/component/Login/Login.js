import React from "react";
import Google from "../../images/google.png";
import { useHistory, useLocation } from "react-router";
import "./login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useContext } from "react";
import { Link } from "@material-ui/core";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { userName: displayName, email, photoURL };
        console.log(signedInUser);
        setUserToken();
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
      });
  };
  return (
    <div>
      <Header></Header>
      <div className="text-center container centered mt-3 login">
          <h3 className="py-4">Login With</h3>
          <button
            className="google-button centered rounded-pill"
            onClick={handleGoogleSignIn}
          >
            <img src={Google} alt="google" />
            Continue with Google
          </button>
          <p className="py-4">
            Don’t have an account? <Link  className="text-danger" to="#">Create an account</Link>{" "}
          </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
