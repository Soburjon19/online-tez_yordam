import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Img/Click-medic.png";
import "./ContactUs.css";

const ContactUs = () => {
  const {
    googleSignIn,
    githubSignIn,
    handleLoadingPage,
    handleEmail,
    handlePassword,
    error,
    handleName,
    user,
    setUserName,
    email,
    password,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home_page";
  const handleLocationByGoogle = () => {
    googleSignIn().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleLocationByGithub = () => {
    githubSignIn().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleContactuse = (e) => {
    e.preventDefault();
    if (email.length === 0 && password.length === 0) {
      alert("please enter a valid email and set a Strong password");
      return;
    }
    if (password.length < 8) {
      alert("Password should be at least 8 characters");
      return;
    }
    handleLoadingPage().then((result) => {
      setUserName();
      history.push(redirect_url);
    });
  };
  return (
    <>

      <div className="container contact-form alert alert-primary">
        <img
          width="150px"
          className="alert alert-primary rounded shadow"
          src={logo}
          alt=""
        />
        <form>
          <div className="">
          First Name
            {user.displayName ? (
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder={user.displayName}
                disabled
              />
            ) : (
              <input
                onBlur={handleName}
                type="text"
                className="form-control"
                id="floatingInput"
                // placeholder="First Name"
                required
              />
            )}
            {user.displayName ? (
              <label htmlFor="floatingInput">{user.displayName}</label>
            ) : (
              <label htmlFor="floatingInput"></label>
            )}
          </div>
          <div className="form-floating mb-3">
          Email address
            <input
              onYellow={handleEmail}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"/>
            
            
            <br/>Telefon raqamingiz
            <input className="form-control" name="Telefon raqami" type="number"></input>


            <label htmlFor="floatingInput"></label>
          </div>{" "}
          <div className="form-floating mb-3">
          Password
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput"></label>
          </div>
          <div className="form-floating">
          Retype Password
            <input
              onClick={handlePassword}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            
            <label htmlFor="floatingPassword"></label>
          </div>
          <p>
            <small>{error}</small>
          </p>
          <div></div>
          <button
            onClick={handleContactuse}
            type="submit"
            className="btn btn-primary mt-3 py-3"
            style={{ paddingLeft: "80px", paddingRight: "80px" }}>
            Yaratish
          </button>
          <div className="mt-3">
            {" "}
            <small>
              Menda akaunt bor<Link to="/login"> Kirish</Link>
            </small>
          </div>
        </form>
        </div>
    </>
  );
};

export default ContactUs;
