import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Img/Click-medic.png";

const Header = () => {
  const { logOut, user } = useAuth();
  console.log(user);
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {" "}
          <img width="70px" src={logo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"> 
          <Nav.Link className="text-dark" as={Link} to="/contact_us">
            Registratsiya
          </Nav.Link>

          {user.displayName && (
            <button onClick={logOut} className="btn btn-outline-primary">
              Log out
            </button>
          )}
          <strong className="text-success ms-2">{user.displayName}</strong>
          <Nav.Link className="text-dark" as={Link} to="/home_page"></Nav.Link>
          {
            <img
              width="50px"
              className="rounded-circle"
              src={user.photoURL}
              alt=""
            />
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
