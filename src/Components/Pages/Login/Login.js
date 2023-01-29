import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Img/Click-medic.png";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home_page";
  console.log(location.state?.from);
  const {
    googleSignIn,
    githubSignIn,
    emailPasswordLogin,
    handleEmail,
    handlePassword,
    error,
    user,
    setUserName,
  } = useAuth();
  const handleLocationByGoogle = () => {
    googleSignIn().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleLocationByGithub = () => {
    githubSignIn().then((result) => {
      setUserName();
      history.push(redirect_url);
    });
  };

  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    emailPasswordLogin().then((result) => {
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
          <div className="form-
         ef floating mb-3">
          Email address
            <input
              onBlur={handleEmail}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput"></label>
          </div>{" "}
          <div className="form-floating mb-3">
          Password
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput"></label>
          </div>
          <p>
            <small className="text-danger">{error}</small>
          </p>
          <div></div>
          <button
            onClick={handleEmailPasswordLogin}
            type="submit"
            className="btn btn-primary mt-3 py-3"
            style={{ paddingLeft: "80px", paddingRight: "80px" }}
          >
            Submit
          </button>
          <div className="mt-3">
            {" "}
            <small>
              Already have an account ? <Link to="/contact_us">Sign up</Link>
            </small>
          </div>
        </form>
        {/* <div className="my-3">___________or___________</div>
        <div>
          <button
            onClick={handleLocationByGoogle}
            className="m-2 btn px-5 py-2 btn-success"
          >
            <i className="fab fa-google"></i>
          </button>
          <button
            onClick={handleLocationByGithub}
            className="m-2 btn px-5 py-2 btn-dark"
          >
            <i className="fab fa-github"></i>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Login;
